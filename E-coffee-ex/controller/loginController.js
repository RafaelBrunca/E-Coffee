const usuarios = require('../models/usuarios');
const { validationResult } = require('express-validator');

const loginController = {
  login: function(req, res) {
    const { email, password } = req.body;
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email == email && usuario.password == password
    );
    if(usuarioEncontrado) {
      req.session.email = usuarioEncontrado.email;
      req.session.name = usuarioEncontrado.name;
      req.session.cpf = usuarioEncontrado.cpf;
      res.render('index');
    } else {
      res.redirect('/');
    }
  },
  cadastro: function(req, res) {
    novoUsuario = undefined;
    res.render('cadastro', { novoUsuario });
  },
  create: function(req, res) {
    let errors = validationResult(req);
    if(!errors.isEmpty()) {
      res.render('cadastro', {
        errors: errors.mapped(),
        old: req.body
      });
    } else {
      const novoUsuario = req.body;
      usuarios.push(novoUsuario);
      res.render("cadastro", { novoUsuario });
    }
  }
}

module.exports = loginController;