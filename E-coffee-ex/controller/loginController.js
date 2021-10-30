const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const loginController = {
  login: async function(req, res) {
    const { email, password } = req.body;

    const usuarioEncontrado = await db.Cliente.findOne({
      where: { email: email }
    },
      function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.senha != password) {
        return done(null, false);
      }
      return done(null, user);
    });

    if(usuarioEncontrado) {
      req.session.user = {};
      req.session.user.name = usuarioEncontrado.nome;
      req.session.user.lastname = usuarioEncontrado.sobrenome;
      req.session.user.telefone = usuarioEncontrado.telefone;
      req.session.user.cpf = usuarioEncontrado.cpf;
      req.session.user.email = usuarioEncontrado.email;
      req.session.user.apelido = usuarioEncontrado.apelido;
      req.session.user.cep = usuarioEncontrado.cep;
      req.session.user.rua = usuarioEncontrado.rua;
      req.session.user.numero = usuarioEncontrado.numero;
      req.session.user.bairro = usuarioEncontrado.bairro;
      req.session.user.cidade = usuarioEncontrado.cidade;
      req.session.user.estado = usuarioEncontrado.estado;
      req.session.user.complemento = usuarioEncontrado.complemento;

      res.redirect('/');
    } else {
      res.render('index');
    }
  },
  cadastro: function(req, res) {
    result = undefined;
    res.render('cadastro');
  },
  create: async function(req, res) {

    var senhaCriptografada = bcrypt.hashSync(req.body.password, 12);

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