import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@material-ui/icons';
import React from 'react';
import {
	Container,
	Left,
	Right,
	Center,
	Logo,
	Desc,
	SocialContainer,
	SocialIcon,
	Title,
	List,
	ListItem,
	ContactItem,
	Payment,
} from './styles/footer';

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Rafa.O</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
					fugiat quisquam pariatur, et laboriosam sapiente, atque cupiditate
					provident autem est, non deleniti? Suscipit accusantium quia quo
					doloribus dicta magnam illum.
				</Desc>
				<SocialContainer>
					<SocialIcon color='3B5999'>
						<Facebook />
					</SocialIcon>
					<SocialIcon color='E4405F'>
						<Instagram />
					</SocialIcon>
					<SocialIcon color='55ACEE'>
						<Twitter />
					</SocialIcon>
					<SocialIcon color='E60023'>
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>

				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> 27, Ijoba Road, Gloucester
				</ContactItem>
				<ContactItem>
					{' '}
					<Phone style={{ marginRight: '10px' }} /> +44 7584040789
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} /> Contact@RafaO.com
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
};

export default Footer;
