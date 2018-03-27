let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
let productsModel = require('../products/productsModel');
const productList = require('../products/products');

/* GET products listing. */

router.get('/', productList.productList);

module.exports = router;
