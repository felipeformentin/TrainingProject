var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Products = require('../products/productsModel');

/* GET products listing. */

router.get('/', (req, res) => {

  //This will return 5 products + the count, and call render while at it;
  getProducts = (count) => {
    Products.find({}).exec(function (err, docs) {
      if (!err) {
        res.send({ products: docs, count: count });
      } else { throw err; }
    });
  }

  countProducts = () => {
    Products.count({}, function (err, count) {
      getProducts(count);
    });
  }

  countProducts();

});

module.exports = router;
