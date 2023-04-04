const Product = require('./productModel');

let cartItems = [];

exports.getCartItems = (req, res) => {
  res.status(200).json(cartItems);
}



  
exports.addToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.findOne({id:productId});
    if (product) {
      cartItems.push(product);
      res.status(200).json(cartItems);
    } else {
      res.status(404).json('Could not find a product');
    }
  } catch (error) {
    res.status(500).json(error);
  }
}








exports.removeFromCart = (req, res) => {
  const { productId } = req.params;
  cartItems = cartItems.filter(product => product.id !== productId);
  res.status(200).json(cartItems);
}
