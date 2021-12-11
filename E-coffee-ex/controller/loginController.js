const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const loginController = {
  login: async function(req, res) {

    const { email, password } = req.body;

    const user = await db.Cliente.findOne({ where: { email: email} });

    if (!user) {
      return;
    };
    if(!await bcrypt.compare(password, user.senha)) {
      return;
    };

    req.session.user = user;

    res.redirect('/');
  },
  cadastro: function(req, res) {
    res.render('cadastro', {
      created: null,
    });
  },
  create: async function(req, res) {

    const senhaCriptografada = bcrypt.hashSync(req.body.password, 12);

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.render('cadastro', {
        errors: errors.mapped(),
        old: req.body,
        created: null
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
        res.render("cadastro", {
          created: true
        });
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};

module.exports = loginController;