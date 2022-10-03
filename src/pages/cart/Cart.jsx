import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Annoucement from '../../components/annoucements/Annoucement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import {
	Container,
	Wrapper,
	Title,
	Top,
	Bottom,
	TopButton,
	TopTexts,
	TopText,
	Info,
	Summary,
	Product,
	ProductDetail,
	Image,
	Details,
	ProductName,
	PriceDetail,
	ProductId,
	ProductColor,
	ProductSize,
	ProductAmountContainer,
	ProductAmount,
	ProductPrice,
	Hr,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
	Button,
} from './styles/cart';

import { userRequest } from '../../requestMethods';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const navigate = useNavigate();

	const KEY = process.env.REACT_APP_STRIPE;

	const onToken = (token) => {
		setStripeToken(token);
	};
	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post('/checkout/payment', {
					tokenId: stripeToken.id,
					amount: cart.total * 100,
				});
				navigate('/success', { state: { data: res.data } });
			} catch (error) {}
		};
		stripeToken && cart.total >= 1 && makeRequest();
	}, [stripeToken, cart.total, navigate]);

	return (
		<Container>
			<Navbar />
			<Annoucement />
			<Wrapper>
				<Title> Your Bag</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type='filled'>CHECK OUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map((product) => (
							<Product key={product._id}>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Products: </b>
											{product.title}
										</ProductName>
										<ProductId>
											<b>ID: </b>
											{product._id}
										</ProductId>
										<ProductColor color={product.color} />
										<ProductSize>
											<b>Size: </b>
											{product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>{product.quantity} </ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>
										£{product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice> £{cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice> £5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice> £-5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice> £{cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name='Rafa.O'
							image='https://avatars.githubusercontent.com/u/1486366?v=4'
							billingAddress
							shippingAddress
							description={`Your total is £${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}
						>
							<Button>CheckOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
