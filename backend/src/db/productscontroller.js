const Product = require('./productModel');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.getProductById = async (req, res) => {
  const {productId} = req.params;
  try {
    const product = await Product.findOne({id: productId});
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json('Could not find a product');
    }
  } catch (error) {
    res.status(500).json(error);
  }

}
