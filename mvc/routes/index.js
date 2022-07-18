var express = require('express');
var router = express.Router();
const productController = require('../controllers/products');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/addProducts', productController.addProducts);

router.get('/getProducts', productController.getProducts);

router.post('/addProduct', productController.addProduct);

// Development only
router.get('/addDummyProducts', productController.addDummyProducts);

module.exports = router;
