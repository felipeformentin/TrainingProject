const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

var userProductsSchema = new Schema({
    created: { type: Date, default: Date.now },
    user_id: String,
    product_id: String
});

var userProductsModel = mongoose.model('UserProducts', userProductsSchema);

module.exports = userProductsModel


// var product = new userProductsModel({
//     created: Date.now(),
//     user_id: '',
//     product_id: '5ab6cdf5734d1d57bac4c538'
//   });

//   product.save(function(err) {
//     if (err) throw err;
  
//     console.log('User saved successfully!');
//   });
//   ;

