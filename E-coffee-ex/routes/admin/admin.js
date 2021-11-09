const express = require('express');
const router = express.Router();
const adminController = require('../../controller/adminController');

router.get('/', adminController.telaLogin);
router.post('/loginadministrativo', adminController.login);

module.exports = router;