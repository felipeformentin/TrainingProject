var productsModel = require('./productsModel');

module.exports.productList = (req, res) => {

    getProducts = (count) => {
        productsModel.find({}).exec(function (err, docs) {
            if (!err) {
                return res.send({ products: docs, count: count });
            } else { throw err; }
        });
    }

    countProducts = () => {
        productsModel.count({}, function (err, count) {
            this.getProducts(count);
        });
    }

    countProducts();
}



