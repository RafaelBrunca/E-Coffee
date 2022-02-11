var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication');
var { enderecos, verifyUser } = require('../middleware/enderecos');
var paginaDoUsuario = require('../controller/userPageController');
var { validaUsuario } = require('../middleware/validators/validator');

/* Middleware de autenticação de Login */
router.use(authentication);

router.get('/', paginaDoUsuario.index);
router.get('/rastrearPedido', paginaDoUsuario.pedidosRealizados);
router.get('/seguranca', paginaDoUsuario.seguranca);
router.get('/enderecos', paginaDoUsuario.enderecos);
router.get('/seguranca/editar', paginaDoUsuario.telaEditarInformacoes);
router.put('/seguranca/editar', validaUsuario, paginaDoUsuario.editarPerfil);
router.get('/enderecos/novoendereco', enderecos, paginaDoUsuario.telaCriarEndereco);
router.post('/enderecos/novoendereco/registrarendereco', paginaDoUsuario.registrarEndereco);
router.get('/enderecos/editar/:id_endereco', verifyUser, paginaDoUsuario.telaEditarEnderecos);
router.put('/enderecos/editar/:id_endereco', paginaDoUsuario.editarEnderecos);
router.get('/enderecos/excluir/:id_endereco', verifyUser, paginaDoUsuario.excluir)

module.exports = router;