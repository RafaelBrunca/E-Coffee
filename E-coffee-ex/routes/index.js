var express = require('express');
//const { produto } = require('../controller/carrinhoController');
const { index } = require('../controller/indexController');
var router = express.Router();
var indexController = require('../controller/indexController');
var carrinhoController = require('../controller/carrinhoController')

router.get('/', indexController.index);
router.get('/cafeteiras', indexController.produtos);
router.get('/logout', indexController.logout);
router.get('/produtoSelecionado', indexController.produtoSelecionado)
router.get('/carrinho', indexController.carrinho)

module.exports = router;