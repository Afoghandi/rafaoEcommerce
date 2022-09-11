import express from 'express';

import User from '../models/User.js';

const router = express.Router();

//UPDATE USER DETAILS

export const updateUserDetails = async (res, req) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString();
	}
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};
export default router;
