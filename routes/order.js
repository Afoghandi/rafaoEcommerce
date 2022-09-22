import express from 'express';

import {
	createOrder,
	updateOrder,
	deleteOrder,
	getUserOrders,
	getAllOrders,
	monthlyIncome,
} from '../controllers/order.js';

import {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} from '../middleware/verifyToken.js';
const router = express.Router();

router.post('/', verifyToken, createOrder);

router.put('/:id', verifyTokenAndAuthorization, updateOrder);

router.delete('/:id', verifyTokenAndAuthorization, deleteOrder);

router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrders);

router.get('/', verifyTokenAndAdmin, getAllOrders);

router.get('/income', verifyToken, monthlyIncome);

export default router;
