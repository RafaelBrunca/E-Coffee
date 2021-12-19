var express = require('express');
var router = express.Router();
var sobreController = require('../controller/sobreController');

router.get('/', sobreController.sobre);

module.exports = router;