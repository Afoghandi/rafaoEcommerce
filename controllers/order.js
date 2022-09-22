import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

//CREATE ORDER

export const createOrder = async (req, res) => {
	const newOrder = new Order(req.body);

	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//UPDATE ORDER

export const updateOrder = async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},

			{ new: true }
		);
		res.status(200).json(updateOrder);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//DELETE ORDER
export const deleteOrder = async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json('Your Order has been deleted...');
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//GET USER ORDER

export const getUserOrders = async (req, res) => {
	try {
		const orders = await Order.find({ userId: req.params.userId });
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//GET ALL ORDERS
export const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//GET MONTHLY INCOME

export const monthlyIncome = async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: { month: { $month: '$createdAt' }, sales: '$amount' },
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: '$sales' },
				},
			},
		]);
		res.status(200).json(income);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
export default router;
