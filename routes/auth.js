import express from 'express';
import { register, login } from '../controllers/auth.js';

const router = express.Router();

//END POINT
//http://localhost:6000/api/auth/register
router.post('/register', register);

//END POINT
//http://localhost:6000/api/auth/login
router.post('/login', login);
export default router;
