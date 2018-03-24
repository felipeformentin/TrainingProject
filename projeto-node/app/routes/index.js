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

  var results = Products.find({}, function (err, docs) {
    if (!err) {
      console.log(docs);
      res.send({ express: docs });
    } else { throw err; }
  });
console.log(products);
var products = results;

  
});

module.exports = router;
