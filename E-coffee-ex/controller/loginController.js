const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const loginController = {
  login: async function(req, res) {

    const { email, password } = req.body;

    const user = await db.Cliente.findOne({ where: { email: email} });

    if (!user) {
      return res.render("cadastro", { 
        errorModel: "E-mail incorreto"
      });
    };
    if(!await bcrypt.compare(password, user.senha)) {
      return res.render("cadastro", { 
        errorSenha: "Senha incorreta"
      })
    };

    req.session.user = user;

    res.redirect('/');
  },
  cadastro: function(req, res) {
    result = undefined;
    res.render('cadastro');
  },
  create: async function(req, res) {

    const senhaCriptografada = bcrypt.hashSync(req.body.password, 12);

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.render('cadastro', {
        errors: errors.mapped(),
        old: req.body,
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
        res.render("cadastro", {result});
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}

module.exports = loginController;