const express=require('express');
const orderRouter=express.Router();
const {placeOrder,verifyOrder, userOrders,listOrders}=require('../controllers/orderController');
const authmiddleware=require('../middleware/auth');


orderRouter.post('/place',authmiddleware,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.get('/list',listOrders)
orderRouter.post('/userOrders',authmiddleware,userOrders)
orderRouter.post('/status',updateState)


module.exports=orderRouter;