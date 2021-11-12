const express = require('express');
const router = express.Router();
var autenticacaoAdmin = require('../../middleware/autenticacaoAdmin');
const adminController = require('../../controller/adminController');


router.get('/', adminController.telaLogin);
router.post('/loginadministrativo', adminController.login);
router.get('/gerenciamentodeprodutos', adminController.gerenciarProdutos);
router.get('/gerenciamentodeprodutos/adicionarproduto', adminController.telaAdicionar);

module.exports = router;