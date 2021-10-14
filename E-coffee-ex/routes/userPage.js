var express = require('express');
var router = express.Router();
var paginaDoUsuario = require('../controller/userPageController');

router.get('/', paginaDoUsuario.index);
router.get('/rastrearPedido', paginaDoUsuario.rastreio);
router.get('/seguranca', paginaDoUsuario.seguranca);
router.get('/enderecos', paginaDoUsuario.enderecos);

module.exports = router;
