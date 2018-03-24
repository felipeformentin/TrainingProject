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

router.get('/api/products', (req, res) => {

  //This will return 5 products + the count, and call render while at it;
  function getProducts(count) {
    Products.find({}).limit(5).exec(function (err, docs) {
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
  // getProducts(function(docs){
  //   res.send({ express: docs, two: 2 });
  // })
  //res.send({ express: docs, two: 2 });
});

module.exports = router;
