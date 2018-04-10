let productsModel = require('./productsModel');
let userProductsModel = require('../user_products/userProductsModel');

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

module.exports.productCartPopover = (req, res) => {
    userProductsModel.find({}).sort([['created', 'desc']]).limit(3).exec(function (err, docs) {
        if (!err) {
            productsModel.find({
                _id: { $in: [docs[0].product_id, docs[1].product_id, docs[2].product_id] }
            }, function (err, docs) {
                return res.send({ product: docs });
            })
        } else { throw err; }
    });
}

module.exports.productCartStore = (req, res) => {
    let product = new userProductsModel({
        created: Date.now(),
        user_id: req.body.user_id,
        product_id: req.body.product_id,
        quantity: req.body.product_quantity
    });

    product.save(function (err) {
        if (err) throw err;
    });
    res.send('Got a POST request');
}