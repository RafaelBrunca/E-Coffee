const usuarios = require('../models/usuarios');

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
    res.render('cadastro');
  }
}

module.exports = loginController;