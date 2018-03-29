let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
let productsModel = require('../products/productsModel');
const productList = require('../products/products');

/* GET products listing. */

router.get('/', productList.productList);

router.get('/detail/:id', productList.productDetail);

module.exports = router;
