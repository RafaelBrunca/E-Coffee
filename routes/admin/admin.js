const express = require('express');
const router = express.Router();
const adminController = require('../../controller/adminController');
const { validacaoProduto } = require('../../middleware/validators/validator');

/* Middleware para autenticação de login Administrativo */
const autenticacaoAdmin = require('../../middleware/autenticacaoAdmin');

/* Importando Middleware do Multer */
const middleMulter = require('../../middleware/upload');

const uploadImage = middleMulter.uploadImage;

router.get('/', adminController.telaLogin);
router.post('/', adminController.login);
router.get('/painel', adminController.painel);
router.get('/gerenciamentodeprodutos', autenticacaoAdmin, adminController.gerenciarProdutos);
router.get('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, adminController.telaAdicionar);
router.post('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, uploadImage.fields([{name:"imagem", maxCount: 1}, {name:"miniaturaUm", maxCount: 1}, {name:"miniaturaDois", maxCount: 1}]), validacaoProduto, adminController.adicionarProduto);
router.get('/gerenciamentodeprodutos/:id', autenticacaoAdmin, adminController.telaEditar);
router.post('/gerenciamentodeprodutos/editar/:id', autenticacaoAdmin, uploadImage.fields([{name:"imagem", maxCount: 1}, {name:"miniaturaUm", maxCount: 1}, {name:"miniaturaDois", maxCount: 1}]), validacaoProduto, adminController.editarProduto);
router.get('/gerenciamentodeprodutos/excluir/:id', autenticacaoAdmin,adminController.removerProduto)


/* uploadImage.single("imagem") */

module.exports = router;