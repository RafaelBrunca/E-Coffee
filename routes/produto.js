var express = require('express');
var router = express.Router();
const produtoController = require('../controller/produtoController');

router.get('/cafeteiras', produtoController.cafeteiras);
router.get('/cafeteiras/:marca', produtoController.marcasCafeteiras);
router.get('/capsulas/:marca', produtoController.marcasCapsulas);
router.get('/capsulas', produtoController.capsulas);
router.post('/carrinho/:id_produto', produtoController.produto);
router.get('/encontrar/:produto', produtoController.encontrarprodutos);
router.get('/:id', produtoController.detalhes);

module.exports = router;