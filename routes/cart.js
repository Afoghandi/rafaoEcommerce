import router from 'express';

import { verifyToken, verifyTokenAndAdmin } from '../middleware/verifyToken.js';

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

router.put('/:id', verifyToken, updateCart);

router.delete('/:id', verifyToken, deleteCart);

router.get('/find/:userId', getUserCart);

router.get('/', verifyTokenAndAdmin, getAll);
export default router;
