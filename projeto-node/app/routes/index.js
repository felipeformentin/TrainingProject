var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let userProductsModel = require('../user_products/userProductsModel');
let productsModel = require('../products/productsModel');

/* GET home page. */
router.get('/api/mensagem', function (req, res, next) {

  //THIS IS A TEST : GETTING THE PRODUCT FROM USER_PRODUCTS
  userProductsModel.findOne({}).exec(function (err, docs) {
    if (!err) {
      productsModel.findOne({ _id: docs.product_id }, function (err, doc) {
        if (!err) {
          return res.send({ product: doc });
        } else { throw err; }
      });
    } else { throw err; }
  });

});

module.exports = router;
