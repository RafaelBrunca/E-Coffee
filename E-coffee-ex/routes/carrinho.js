var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication');
var carrinhoController = require('../controller/carrinhoController');

/* Middleware de autenticação de Login */
router.use(authentication);

router.get('/', carrinhoController.produto);
router.get('/produto/carrinho', carrinhoController.produto);
router.get('/carrinho/excluir/:id', carrinhoController.removerProdutoCarrinho)

module.exports = router;