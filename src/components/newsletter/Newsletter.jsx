import { Send } from '@material-ui/icons';
import React from 'react';
import {
	Container,
	Desc,
	InputContainer,
	Input,
	Button,
	Title,
} from './styles/newsletter';

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc> Get timely updates from favorite products. </Desc>
			<InputContainer>
				<Input placeholder='Your email' />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
