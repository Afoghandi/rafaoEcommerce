import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import ProductList from './pages/productlist/ProductList';
import Register from './pages/register/Register';
import Success from './pages/Success';
import Home from './pages/Home';
import { useSelector } from 'react-redux';

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:category' element={<ProductList />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/success' element={<Success />} />
				<Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
				<Route
					path='/Register'
					element={user ? <Navigate to='/' /> : <Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
