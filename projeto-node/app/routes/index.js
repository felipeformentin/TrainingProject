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
      process.exit();
    } else { throw err; }
  });

var products = {
  id: '3',
  name: '3',
  description: '3',
  quantity: '3',
  value: '3'
}
  res.send({ express: products });
});

module.exports = router;
