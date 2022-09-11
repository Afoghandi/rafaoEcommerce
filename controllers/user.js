import express from 'express';
import CryptoJS from 'crypto-js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

//REGISTER
export const register = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (username)
			return res
				.status(400)
				.json({ message: `Username not available, Please find a unique one` });

		if (existingUser)
			return res.status(400).json({ message: `User already exist` });
		const hashedPassword = await CryptoJS.AES.encrypt(
			password,
			process.env.PASS_SEC
		).toString();

		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
		});
		res.status(200).json(newUser);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

//LOGIN

export const login = async (req, res) => {
	const { username } = req.body;

	try {
		const user = await User.findOne({ username });
		!user && res.status(401).json({ message: 'Wrong Credentials' });

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);
		const savedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
		savedPassword !== req.body.password &&
			res.status(400).json({ message: 'Wrong Credentials' });

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{ expiresIn: '1h' }
		);

		const { password, ...others } = user._doc;

		res.status(200).json({ ...others, accessToken });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export default router;
