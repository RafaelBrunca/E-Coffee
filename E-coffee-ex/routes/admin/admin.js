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
router.get('/gerenciamentodeprodutos', autenticacaoAdmin, adminController.gerenciarProdutos);
router.get('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, adminController.telaAdicionar);
router.post('/gerenciamentodeprodutos/adicionarproduto', autenticacaoAdmin, uplodaImage.single("imagem"), adminController.adicionarProduto);

module.exports = router;