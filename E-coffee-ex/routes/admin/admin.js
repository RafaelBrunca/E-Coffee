const express = require('express');
const router = express.Router();

/* Middleware para autenticação de login Administrativo */
const autenticacaoAdmin = require('../../middleware/autenticacaoAdmin');

const adminController = require('../../controller/adminController');

router.get('/', adminController.telaLogin);
router.post('/loginadministrativo', adminController.login);
router.get('/gerenciamentodeprodutos', autenticacaoAdmin, adminController.gerenciarProdutos);
router.get('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, adminController.telaAdicionar);

module.exports = router;