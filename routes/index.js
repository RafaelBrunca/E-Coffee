var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');

/* Middleware validando usuario logado */
var usuarioLogado = require('../middleware/usuarioLogado');

router.get('/', indexController.index);
router.get('/sobre', indexController.sobre);
router.get('/token', usuarioLogado, indexController.token);
router.get('/logout', indexController.logout);

module.exports = router;