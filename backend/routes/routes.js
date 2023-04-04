var express = require('express');


var userController = require('../src/db/controller');
const productsController = require('../src/db/productscontroller');
const cartController = require('../src/db/cartcontroller');


const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/register').post(userController.registerUserControllerFn);


router.get('/products', productsController.getProducts);
router.get('/users/:userId/cart', cartController.getCartItems);
router.get('/products/:productId', productsController.getProductById);
router.post('/users/:userId/cart', cartController.addToCart);
router.delete('/users/:userId/cart/:productId', cartController.removeFromCart);

module.exports = router;







