const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Code related to dummy products (Only for development purposes)
// *************************************
const PRODUCTS = [
    {
        name: 'Flap Disc',
        description:
            "A flap disc is an abrasive product found in the coated abrasive family. The discs are made up of many layered, overlapping sections of abrasive material or 'flaps'.",
        price: '₹125.00',
        imageUrl: 'https://iepplstore.com/wp-content/uploads/2020/10/3M-563D-RADIAL-FLAP-DISC-120.jpg',
        setSize: 10,
        category: 'Natural',
    },
    {
        name: 'Fibre Disc Aloxide',
        description:
            'Used for polishing welding seams, irregular surfaces (stone, marble, granite etc), for deburring stainless steel, removing paint and to polish other hard-to-grind areas by installing on electrical or pneumatic angle grinders - used on wood surfaces and in ship manufacturing, automobile industries etc.',
        price: '₹8.5',
        imageUrl: 'https://4.imimg.com/data4/EB/TY/ANDROID-265202/product-500x500.jpeg',
        setSize: 100,
        category: 'Synthetic',
    },
    {
        name: 'Fibre Disc Zircon',
        description:
            'Suitable for removing imperfections, gates, risers, and parting lines on ferrous or exotic metals such as super alloys, high-strength stainless steel and cobalt.',
        price: '₹12.5',
        imageUrl: 'https://5.imimg.com/data5/FL/HO/HZ/SELLER-3946798/zirconia-fiber-disc-zircon--500x500.jpg',
        setSize: 50,
        category: 'Natural',
    },
];
const addDummyProducts = (req, res) => {
    Product.create(PRODUCTS, (err, products) => {
        if (err) {
            res.send({ err: err });
        }
        res.json({ products });
    });
};
// *************************************

const addProducts = (req, res) => {
    Product.insertMany(req.body.products, (err, products) => {
        if (err) {
            res.send(err);
        }
        res.json({ products });
    });
};
const getProducts = (req, res) => {
    Product.find({}, '', { lean: true }, (err, products) => {
        if (err) {
            res.send(err);
        }
        res.json({ products });
    });
};

const addProduct = (req, res) => {
    Product.insertMany(req.body.product, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json({ product });
    });
};

module.exports = {
    addDummyProducts,
    addProducts,
    getProducts,
    addProduct,
};
