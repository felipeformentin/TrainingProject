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
};

module.exports.productDetail = (req, res) => {

    getProduct = () => {
        productsModel.findOne({ _id: req.params.id }, function (err, doc) {
            if (!err) {
                return res.send({ product: doc });
            } else { throw err; }
        });
    }

    getProduct();
};

