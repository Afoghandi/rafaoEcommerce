import express from 'express';

const router = express.Router();

router.get('/usertest', (req, res) => {
	res.send('User test is succesful');
});

router.post('/userposttest', (req, res) => {
	const username = req.body.username;
	res.send('your username is ${username}' + username);
	console.log(username);
});
export default router;
