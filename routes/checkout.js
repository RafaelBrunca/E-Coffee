var express = require('express');
var router = express.Router();
let checkout = require('../controller/checkoutController');
var authentication = require('../middleware/authentication');

router.use(authentication);

router.get('/', checkout.finalizarCompra);

module.exports = router;