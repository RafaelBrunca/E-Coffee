var express = require('express');
var router = express.Router();
const produtoController = require('../controller/produtoController');

<<<<<<< HEAD
console.log('entrou aqui');
=======
router.get('/cafeteiras', produtoController.cafeteiras);
router.get('/capsulas', produtoController.capsulas);
>>>>>>> d29acf02b1258db7e88ad34919ef364972720175
router.get('/:id', produtoController.detalhes);
router.get('/carrinho', produtoController.showCarrinho);
module.exports = router;