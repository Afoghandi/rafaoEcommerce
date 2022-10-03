import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import {
	Container,
	Wrapper,
	Title,
	Input,
	Link,
	Button,
	Form,
	Error,
} from './styles/login';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		console.log('hello');
		login(dispatch, { username, password });
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						placeholder='username'
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						placeholder='password'
						type='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick} disabled={isFetching}>
						{' '}
						LOGIN
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link> DO YOU NOT REMEMBER THE PASSWORD?</Link>
					<Link> CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
