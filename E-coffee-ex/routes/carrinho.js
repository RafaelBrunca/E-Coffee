var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication');
var carrinhoController = require('../controller/carrinhoController');

/* Middleware de autenticação de Login */
router.use(authentication);

router.get('/', carrinhoController.produto);

module.exports = router;