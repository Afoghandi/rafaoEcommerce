import express from 'express';
import {
	addProduct,
	updateProduct,
	deleteProduct,
	getSingleProduct,
	getAllProducts,
} from '../controllers/product.js';

import { verifyTokenAndAdmin } from '../middleware/verifyToken.js';

const router = express.Router();

// END POINT: http://localhost:6000/api/products

router.post('/', verifyTokenAndAdmin, addProduct);

router.put('/:id', verifyTokenAndAdmin, updateProduct);

router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

router.get('/find/:id', getSingleProduct);

router.get('/', getAllProducts);
export default router;
