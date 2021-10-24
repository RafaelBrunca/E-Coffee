const usuarios = require('../models/usuarios');
const { validationResult } = require('express-validator');

const loginController = {
  login: function(req, res) {
    const { email, password } = req.body;
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email == email && usuario.password == password
    );
    if(usuarioEncontrado) {
      req.session.user = {};
      req.session.user.name = usuarioEncontrado.name;
      req.session.user.lastname = usuarioEncontrado.lastname;
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
    novoUsuario = undefined;
    res.render('cadastro', novoUsuario);
  },
  create: function(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      res.render('cadastro', {
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      const novoUsuario = req.body;
      usuarios.push(novoUsuario);
      res.render("cadastro", { novoUsuario });
    }
  }
}

module.exports = loginController;