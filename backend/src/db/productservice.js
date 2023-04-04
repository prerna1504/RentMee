// service.js

const Product = require('./productModel');

exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.addProductToCart = async (userId, productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.cartItems.push(product);
    await user.save();
    return user.cartItems;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.removeProductFromCart = async (userId, productId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.cartItems = user.cartItems.filter((item) => item.toString() !== productId);
    await user.save();
    return user.cartItems;
  } catch (err) {
    throw new Error(err.message);
  }
};
