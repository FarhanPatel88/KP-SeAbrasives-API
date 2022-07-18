const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        default: 'https://via.placeholder.com/200x250',
    },
    setSize: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

mongoose.model('Product', productSchema);
