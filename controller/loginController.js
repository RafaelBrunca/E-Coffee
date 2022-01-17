const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const loginController = {
  login: async function(req, res) {

    const { email, password } = req.body;

    const user = await db.Cliente.findOne({ where: { email: email} })

    if(!user){
      return res.render('cadastro', {
        old: [],
        message: "E-mail ou senha inválidos"
      });
    };

    if(!await bcrypt.compare(password, user.senha)) {
      return res.render('cadastro', {
        old: [],
        message: "E-mail ou senha inválidos"
      });
    };

    req.session.user = user;

    return res.redirect('/');
  },
  cadastro: function(req, res) {
    res.render('cadastro', {
      old: [],
      message: []
    });
  },
  create: async function(req, res) {

    const senhaCriptografada = bcrypt.hashSync(req.body.password, 12);

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.render('cadastro', {
        errors: errors.mapped(),
        old: req.body,
        message: []
      });
    } else {
      await db.Cliente.create({
        nome: req.body.name,
        sobrenome: req.body.lastname,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        email: req.body.email,
        senha: senhaCriptografada
      }).then((result) => {
        return res.redirect('/iniciarsessao')
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};

module.exports = loginController;