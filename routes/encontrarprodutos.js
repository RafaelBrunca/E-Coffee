var express = require('express');
var router = express.Router();
var encontrarprodutos = require('../controller/encontrarprodutos');

router.get('/:produto', encontrarprodutos.api);

module.exports = router;