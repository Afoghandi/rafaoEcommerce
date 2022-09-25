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
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Products = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const dispatch = useDispatch();

	//Increases or Decreases quantities of product.
	const handleQuantity = (type) => {
		if (type === 'dec') {
			//prevents quantity from being less than one
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	//Adds all information about the product to the cart as one single object
	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity, color, size }));
	};

	//Fetches product information from DB
	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get(`/products/find/${id}`);
				setProduct(res.data);
			} catch (err) {}
		};
		getProduct();
	}, [id]);

	const { img, title, desc, price } = product;

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
							{product.color?.map((c) => (
								<FilterColor color={c} key={c} onClick={() => setColor(c)} />
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={(e) => setSize(e.target.value)}>
								{product.size?.map((s) => (
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
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Products;
