const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String ,
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  averageRating: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
