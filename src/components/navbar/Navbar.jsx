import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
					<Link to='/cart'>
						<MenuItem>
							{' '}
							<Badge
								badgeContent={quantity}
								color='primary'
								overlap='rectangular'
							>
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
