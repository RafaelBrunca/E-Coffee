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

module.exports = router;
