var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
var validator = require('../middleware/validators/login');

router.post('/', validator.validacaoLogin, loginController.login);
router.get('/iniciarcessao', loginController.cadastro);
router.post('/create', validator.validacaoRegistro, loginController.create);

module.exports = router;