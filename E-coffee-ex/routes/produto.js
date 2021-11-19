var express = require('express');
var router = express.Router();
const produtoController = require('../controller/produtoController');


router.get('/:id', produtoController.detalhes);

module.exports = router;