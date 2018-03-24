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

  //This will return 5 products, and call render while at it;
  var results = Products.find({}).limit(5).exec(function(err, docs){
    if (!err) {
      res.send({ express: docs, two: 2 });
    } else { throw err; }
  });
console.log("this " . results);
});

module.exports = router;
