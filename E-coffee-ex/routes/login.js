var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
var { validacaoRegistro } = require('../middleware/validators/login');
var recuperarSenha = require('../controller/recuperarSenhacontroller');

/* Middleware validando usuario logado */
var usuarioLogado = require('../middleware/usuarioLogado');

router.use(usuarioLogado);

router.post('/',loginController.login);
router.get('/iniciarsessao', loginController.cadastro);
router.post('/create', validacaoRegistro, loginController.create);
router.get('/recuperarsenha', recuperarSenha.recupera);

module.exports = router;