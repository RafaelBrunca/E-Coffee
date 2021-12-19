const express = require('express');
const router = express.Router();

/* Middleware para autenticação de login Administrativo */
const autenticacaoAdmin = require('../../middleware/autenticacaoAdmin');

const adminController = require('../../controller/adminController');

/* Importando Middleware do Multer */
const middleMulter = require('../../middleware/upload');

const uplodaImage = middleMulter.uploadImage;

router.get('/', adminController.telaLogin);
router.post('/', adminController.login);
router.get('/painel', adminController.painel);
router.get('/gerenciamentodeprodutos', autenticacaoAdmin, adminController.gerenciarProdutos);
router.get('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, adminController.telaAdicionar);
router.post('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, uplodaImage.single("imagem"), adminController.adicionarProduto);
router.get('/gerenciamentodeprodutos/:id', autenticacaoAdmin, adminController.telaEditar);
router.post('/gerenciamentodeprodutos/editar/:id', autenticacaoAdmin, uplodaImage.single("imagem"), adminController.editarProduto);
router.get('/gerenciamentodeprodutos/excluir/:id', autenticacaoAdmin,adminController.removerProduto)

module.exports = router;