import React from 'react';
import ProductItem from '../productItem/ProductItem';
import { Container } from './styles/product';
import { popularProducts } from '../../data';

const Product = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<ProductItem item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Product;
