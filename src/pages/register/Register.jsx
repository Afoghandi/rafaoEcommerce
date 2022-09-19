import {
	Container,
	Wrapper,
	Form,
	Input,
	Title,
	Agreement,
	Button,
} from './styles/register';

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder='name' />
					<Input placeholder='last name' />
					<Input placeholder='email' />
					<Input placeholder='username' />
					<Input placeholder='password' />
					<Input placeholder='confirm password' />
					<Agreement>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						quia, iure quam id minus laboriosam consequuntur exercitationem
						provident temporibus, commodi sunt recusandae neque sed et
						repudiandae vel porro quod ratione.
					</Agreement>
					<Button> CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
