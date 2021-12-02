var express = require('express');
var router = express.Router();
const produtoController = require('../controller/produtoController');

console.log('entrou aqui');
router.get('/:id', produtoController.detalhes);
router.get('/carrinho', produtoController.showCarrinho);
module.exports = router;