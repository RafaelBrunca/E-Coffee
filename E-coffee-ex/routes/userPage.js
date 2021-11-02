var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication');
var paginaDoUsuario = require('../controller/userPageController');

/* Middleware de autenticação de Login */
router.use(authentication);

router.get('/', paginaDoUsuario.index);
router.get('/rastrearPedido', paginaDoUsuario.rastreio);
router.get('/seguranca', paginaDoUsuario.seguranca);
router.get('/enderecos', paginaDoUsuario.enderecos);
router.get('/seguranca/editar', paginaDoUsuario.telaEditarInformacoes);
router.put('/seguranca/editar', paginaDoUsuario.editarPerfil);
router.get('/enderecos/novoendereco', paginaDoUsuario.telaCriarEndereco);
router.post('/enderecos/novoendereco/registrarendereco', paginaDoUsuario.registrarEndereco);
router.get('/enderecos/editar', paginaDoUsuario.telaEditarEnderecos);
router.put('/enderecos/editar', paginaDoUsuario.editarEnderecos);

module.exports = router;