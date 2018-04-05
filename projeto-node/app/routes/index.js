var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let userProductsModel = require('../user_products/userProductsModel');
let productsModel = require('../products/productsModel');


/* GET home page. */
router.get('/api/mensagem', function (req, res, next) {

  userProductsModel.find({}).limit(3).exec(function (err, docs){
    if(!err){
        productsModel.find({
          _id: { $in: [docs[0].product_id, docs[1].product_id, docs[2].product_id] }
        }, function (err, docs){
          return res.send({ product: docs });
        })
    } else {throw err;}
  });

});

router.post('/api/salva', function (req, res, next) {
  let product = new userProductsModel({
    created: Date.now(),
    user_id: req.body.user_id,
    product_id: req.body.product_id,
    quantity: req.body.product_quantity
  });

  product.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully!');
  });
  ;
  console.log(req.body.user_id);
  res.send('Got a POST request');
});

module.exports = router;
