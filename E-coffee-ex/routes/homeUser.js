var express = require('express');
var router = express.Router();
var homeUser = require('../controller/homeUserController');

router.get('/', homeUser.index);

module.exports = router;
