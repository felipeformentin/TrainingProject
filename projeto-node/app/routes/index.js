var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Products = require('../products/productsModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/mensagem', (req, res) => {
  

  var queijo = new Products({
    name: 'Queijo',
    description: 'Delicioso queijo',
    price: '24.45',
    quantity: '100'
  })

  Products.find({}, function(err, docs) {
    if (!err){ 
        console.log(docs);
        process.exit();
    } else {throw err;}
});
  res.send({ express: 'Hello From Express' });
});

module.exports = router;
