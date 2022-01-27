var express = require('express');
var router = express.Router();
let checkout = require('../controller/checkoutController');
const finalizarCompra = require('../middleware/finalizarCompra'); 

var authentication = require('../middleware/authentication');

router.use(authentication);

router.get('/',finalizarCompra , checkout.finalizarCompra);
router.post('/', checkout.confirmar);

module.exports = router;