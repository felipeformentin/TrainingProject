var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let userProductsModel = require('../user_products/userProductsModel');
let productsModel = require('../products/productsModel');
const productList = require('../products/products');

/* GET home page. */
// router.get('/api/mensagem', productList.productCartPopover);

// router.post('/api/salva', productList.productCartStore);

module.exports = router;
