var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');

router.get('/', indexController.index);

module.exports = router;