var express = require('express');
var router = express.Router();
var finalizarCompraController = require('../controller/finalizarCompraController');

router.get('/', finalizarCompraController.produto)
router.get('/carrinho/finalizarCompra', finalizarCompraController.produto)

module.exports = router;