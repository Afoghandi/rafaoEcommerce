import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import productRoute from './routes/products.js';
import cartRoute from './routes/cart.js';
import orderRoute from './routes/order.js';
//setting up config file
dotenv.config({ path: 'config/config.env' });
const app = express();

//connect database
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log(
		`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
	);
});
