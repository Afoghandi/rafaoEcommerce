import { Add, Remove } from '@material-ui/icons';
import Annoucement from '../../components/annoucements/Annoucement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';

import {
	Container,
	Image,
	ImgContainer,
	InfoContainer,
	Title,
	Wrapper,
	Desc,
	Price,
	FilterContainer,
	Filter,
	FilterTitle,
	FilterColor,
	FilterSize,
	FilterSizeOption,
	AddContainer,
	AmountContainer,
	Amount,
	Button,
} from './styles/product';

const Products = () => {
	return (
		<Container>
			<Navbar />
			<Annoucement />
			<Wrapper>
				<ImgContainer>
					<Image src='https://4.imimg.com/data4/QI/NW/MY-36740590/mens-suit-500x500.jpg' />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jump Suit</Title>
					<Desc>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						labore quisquam deserunt nemo quas voluptatum sint earum amet
						provident officia ab porro libero quos magnam explicabo sed! Libero,
						sequi nulla!{' '}
					</Desc>
					<Price> £20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color='black' />
							<FilterColor color='darkblue' />
							<FilterColor color='gray' />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Products;
