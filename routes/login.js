var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
var { validacaoRegistro } = require('../middleware/validators/validator');
var recuperarSenha = require('../controller/recuperarSenhacontroller');

/* Middleware validando usuario logado */
var usuarioLogado = require('../middleware/usuarioLogado');

router.use(usuarioLogado);

router.get('/', loginController.cadastro);
router.post('/login', loginController.login);
router.post('/create', validacaoRegistro, loginController.create);
router.post('/confirm', validacaoRegistro, loginController.confirm);
router.get('/recuperarsenha', recuperarSenha.recupera);

module.exports = router;