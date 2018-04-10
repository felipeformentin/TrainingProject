var express = require('express');
var router = express.Router();
const productList = require('../products/products');

/* GET home page. */
router.get('/listPopover', productList.productCartPopover);

router.post('/store', productList.productCartStore);

module.exports = router;
