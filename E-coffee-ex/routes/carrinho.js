var express = require('express');
var router = express.Router();
var carrinhoController = require('../controller/carrinhoController');

router.get('/', carrinhoController.produto);

module.exports = router;