var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authentication');
var carrinhoController = require('../controller/carrinhoController');
var finalizarCompraController = require('../controller/finalizarCompraController');

/* Middleware de autenticação de Login */
router.use(authentication);

router.get('/', carrinhoController.carrinho);
router.get('/produto/carrinho', carrinhoController.carrinho);
router.get('/carrinho/excluir/:id', carrinhoController.removerProdutoCarrinho);
router.get('/finalizarCompra', finalizarCompraController.produto);

module.exports = router;