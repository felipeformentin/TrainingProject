var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Products = require('../products/productsModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

router.get('/api/products/', (req, res) => {

  //This will return 5 products + the count, and call render while at it;
  function getProducts(count) {
    Products.find({}).exec(function (err, docs) {
      if (!err) {
        res.send({ products: docs, count: count });
      } else { throw err; }
    });
  }

  function countProducts() {
    Products.count({}, function (err, count) {
      getProducts(count);
    });
  }

  countProducts();
  
});

module.exports = router;
