import { Link } from 'react-router-dom';
import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import { Container, Circle, Image, Info, Icon } from './styles/productitem';

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`}>
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;