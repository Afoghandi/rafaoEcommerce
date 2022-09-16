import express from 'express';

import Cart from '../models/Cart.js';

const router = express.Router();

//CREATE
export const createCart = async (req, res) => {
	const newCart = new Cart(req.body);

	try {
		const savedCart = await newCart.save();
		res.status(200).json(savedCart);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//UPDATE

export const updateCart = async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			}
		);
		res.status(200).json(updatedCart);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//DELETE

export const deleteCart = async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);

		res.status(200).json('Cart has been deleted...');
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//GET USER CART

export const getUserCart = async (req, res) => {
	try {
		const cart = await Cart.findOne({ userID: req.params.userId });
		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

// GET ALL

export const getAll = async (req, res) => {
	try {
		const carts = await Cart.find();

		res.status(200).json(carts);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

export default router;
