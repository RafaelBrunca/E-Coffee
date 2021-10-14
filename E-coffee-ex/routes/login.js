var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');

router.post('/login', loginController.login);
router.get('/iniciarcessao', loginController.cadastro);

module.exports = router;