var express = require('express');
var router = express.Router();
var loginController = require('../controller/loginController');
var { validacaoRegistro } = require('../middleware/validators/login');

router.post('/', loginController.login);
router.get('/iniciarsessao', loginController.cadastro);
router.post('/create', validacaoRegistro, loginController.create);

module.exports = router;