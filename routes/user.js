import express from 'express';
import User from '../models/User.js';

import {
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} from '../middleware/verifyToken.js';

import {
	getSingleUser,
	deleteUser,
	updateUser,
	getAllUsers,
	getUserStats,
} from '../controllers/users.js';

const router = express.Router();

//END POINT
//http://localhost:6000/api/users/631e6b396d3fffc26f71ae0a
router.put('/:id', verifyTokenAndAuthorization, updateUser);

//END POINT
//http://localhost:6000/api/users/631d1d18a3e0cfe933365867

router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

//END POINT

//http://localhost:6000/api/users/find/631cadbda8060559da0ac6c4
router.get('/find/:id', verifyTokenAndAdmin, getSingleUser);

//END POINT

//http://localhost:6000/api/users?new=true
router.get('/', verifyTokenAndAdmin, getAllUsers);

//END POINT
//http://localhost:6000/api/users/stat
router.get('/stat', verifyTokenAndAdmin, getUserStats);
export default router;
