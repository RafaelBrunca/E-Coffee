const db = require('../database/models');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const loginController = {
  login: async function(req, res) {

    const { email, password } = req.body;

    const user = await db.Cliente.findOne({ where: { email: email} });

    if (!user) {
      return res.render('index');
    }

    if(!await bcrypt.compare(password, user.senha)) {
      return res.render('index');
    }

    req.session.user = {};
    req.session.user.id = user.id_cliente;
    req.session.user.name = user.nome;
    req.session.user.lastname = user.sobrenome;
    req.session.user.telefone = user.telefone;
    req.session.user.cpf = user.cpf;
    req.session.user.email = user.email;
    req.session.user.apelido = user.apelido;
    req.session.user.cep = user.cep;
    req.session.user.rua = user.rua;
    req.session.user.numero = user.numero;
    req.session.user.bairro = user.bairro;
    req.session.user.cidade = user.cidade;
    req.session.user.estado = user.estado;
    req.session.user.complemento = user.complemento;

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