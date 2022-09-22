import { Add, Remove } from '@material-ui/icons';
import Annoucement from '../../components/annoucements/Annoucement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
import { publicRequest } from '../../requestMethods';

const Products = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);

	const handleQuantity = (type) => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get(`/products/find/${id}`);
				setProduct(res.data);
			} catch (err) {}
		};
		getProduct();
	}, [id]);

	const { img, title, desc, price, color, size } = product;
	return (
		<Container>
			<Navbar />
			<Annoucement />
			<Wrapper>
				<ImgContainer>
					<Image src={img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{title}</Title>
					<Desc>{desc}</Desc>
					<Price> £{price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{color?.map((c) => (
								<FilterColor color={c} key={c} />
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								{size?.map((s) => (
									<FilterSizeOption key={s}>{s} </FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove onClick={() => handleQuantity('dec')} />
							<Amount>{quantity} </Amount>
							<Add onClick={() => handleQuantity('inc')} />
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
