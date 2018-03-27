const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

var productSchema = new Schema({
    name: String,
    description: String,
    price: String,
    quantity: String
});

var ProductsModel = mongoose.model('Products', productSchema);

module.exports = ProductsModel;




// var product = new Products({
//     name: 'Queijo',
//     description: 'Delicioso queijo',
//     price: '24.45',
//     quantity: '100'
//   });