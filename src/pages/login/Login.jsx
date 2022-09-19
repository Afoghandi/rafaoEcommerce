import {
	Container,
	Wrapper,
	Title,
	Input,
	Link,
	Button,
	Form,
} from './styles/login';

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder='username' />
					<Input placeholder='password' />
					<Button> LOGIN</Button>
					<Link> DO YOU NOT REMEMBER THE PASSWORD?</Link>
					<Link> CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
