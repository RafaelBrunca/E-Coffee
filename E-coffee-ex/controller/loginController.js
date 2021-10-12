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
      res.render('carrinho');
    } else {
      res.redirect('/');
    }
  },
}

module.exports = loginController;