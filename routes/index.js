var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');

router.get('/', indexController.index);
router.get('/sobre', indexController.sobre);
router.get('/token', indexController.token);
router.get('/logout', indexController.logout);

module.exports = router;