import express from 'express';

import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
//setting up config file
dotenv.config({ path: 'config/config.env' });
const app = express();
//connect database
connectDB();

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.listen(process.env.PORT || 5000, () => {
	console.log(
		`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
	);
});
