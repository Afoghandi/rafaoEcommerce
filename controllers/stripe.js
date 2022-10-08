import express from 'express';
import dotenv from 'dotenv';
import Stripe from 'stripe';

//setting up config file
dotenv.config({ path: 'config/config.env' });

const stripe = new Stripe(process.env.STRIPE_KEY);
const router = express.Router();

export const stripePayment = async (req, res) => {
	stripe.charges.create(
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd',
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				res.status(500).json({ message: stripeErr });
			} else {
				res.status(200).json(stripeRes);
			}
		}
	);
};

export default router;
