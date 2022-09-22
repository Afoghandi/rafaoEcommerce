import express from 'express';

import {
	verifyToken,
	verifyTokenAndAdmin,
	verifyTokenAndAuthorization,
} from '../middleware/verifyToken.js';

import {
	createCart,
	updateCart,
	deleteCart,
	getUserCart,
	getAll,
} from '../controllers/cart.js';

const router = express.Router();

// END POINT: http://localhost:6000/api/cart

router.post('/', verifyToken, createCart);

router.put('/:id', verifyTokenAndAuthorization, updateCart);

router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart);

router.get('/', verifyTokenAndAdmin, getAll);
export default router;
