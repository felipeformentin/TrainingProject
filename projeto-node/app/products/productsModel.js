const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

var productSchema = new Schema({
    name: String,
    description: String,
    price: String,
    quantity: String
});

var Products = mongoose.model('Products', productSchema);

module.exports = Products;