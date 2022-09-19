import React from 'react';
import Annoucement from '../components/annoucements/Annoucement';
import Categories from '../components/categories/Categories';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import Product from '../components/products/Product';
import Slider from '../components/slider/Slider';

const Home = () => {
	return (
		<div>
			<Annoucement />
			<Navbar />
			<Slider />
			<Categories />
			<Product />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
