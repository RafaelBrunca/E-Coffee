var express = require('express');
var router = express.Router();
const produtoController = require('../controller/produtoController');

router.get('/cafeteiras', produtoController.cafeteiras);
router.get('/cafeteiras/:marca', produtoController.mondial);
router.get('/capsulas', produtoController.capsulas);

router.get('/:id', produtoController.detalhes);

module.exports = router;