import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import {
	Wrapper,
	Language,
	Left,
	Container,
	Center,
	Right,
	SearchContainer,
	Input,
	Logo,
	MenuItem,
} from './styles/navbar';

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: 'gray', fontSize: '16px' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>RAFA.O </Logo>
				</Center>
				<Right>
					<MenuItem> Register</MenuItem>
					<MenuItem> Sign In</MenuItem>{' '}
					<MenuItem>
						{' '}
						<Badge badgeContent={quantity} color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
