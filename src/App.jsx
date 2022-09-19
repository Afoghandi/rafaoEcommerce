import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Product from './pages/products/Products';
import ProductList from './pages/productlist/ProductList';
import Register from './pages/register/Register';
import Home from './pages/Home';

const App = () => {
	const user = true;
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/products/:category' element={<ProductList />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route
					path='/register'
					element={user ? <Navigate to='/' replace /> : <Register />}
				/>
				<Route
					path='/login'
					element={user ? <Navigate to='/' replace /> : <Login />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
