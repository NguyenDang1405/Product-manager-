const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: String,
    deleted: Boolean,
});

const Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
