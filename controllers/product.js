import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

//ADD Product to DB

export const addProduct = async (req, res) => {
	const newProduct = new Product(req.body);

	try {
		const savedProduct = await newProduct.save();

		res.status(200).json(savedProduct);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//UPDATE PRODUCT

export const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,

			{
				$set: req.body,
			},

			{ new: true }
		);
		res.status(200).json(updateProduct);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//DELETE PRODUCT

export const deleteProduct = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

// GET SINGLE PRODUCT

export const getSingleProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	try {
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

//GET ALL PRODUCT

export const getAllProducts = async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;

	try {
		let products;
		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(5);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			products = await Product.find();
		}
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ message: err });
	}
};
export default router;
