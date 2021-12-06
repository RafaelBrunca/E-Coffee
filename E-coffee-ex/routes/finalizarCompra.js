var express = require('express');
var router = express.Router();
var finalizarCompraController = require('../controller/finalizarCompraController');

/* Rota de produtoSelecionado para pagina de finalizar compra */
router.get('/produtoSelecionado/finalizarCompra', finalizarCompraController.produto)

router.get('/', finalizarCompraController.produto)

module.exports = router;