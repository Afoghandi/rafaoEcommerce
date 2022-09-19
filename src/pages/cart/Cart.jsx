import { Add, Remove } from '@material-ui/icons';
import React from 'react';
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

const Cart = () => {
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
						<Product>
							<ProductDetail>
								<Image src='https://contents.mediadecathlon.com/p1977887/k$16a7c875ce44097c8edf5afa44e73923/sq/basketball-shoes-se900-blacknba-los-angeles-lakers.jpg?format=auto&f=800x0' />
								<Details>
									<ProductName>
										<b>Products: </b>JESSIE THUNDER SHOES{' '}
									</ProductName>
									<ProductId>
										<b>ID: </b> 989008redgkk
									</ProductId>
									<ProductColor color='black' />
									<ProductSize>
										<b>Size: 37.5</b>{' '}
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice> £30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src='https://www.onudesignerwear.com/images/off-white-tape-arrows-cotton-t-shirt-black-p5319-10185_image.jpg' />
								<Details>
									<ProductName>
										<b>Products: </b>White Stuff
									</ProductName>
									<ProductId>
										<b>ID: </b> 989008redgkk
									</ProductId>
									<ProductColor color='gray' />
									<ProductSize>
										<b>Size: M</b>{' '}
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice> £30</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice> £80.90</SummaryItemPrice>
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
							<SummaryItemPrice> £80</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
