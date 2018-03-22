var Products = require('./productsModel');

Products.find({}, function(err, docs) {
    if (!err){ 
        console.log(docs);
        process.exit();
    } else {throw err;}
});