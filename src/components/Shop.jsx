import { useState } from 'react';
import ProductsProvider from '../contexts/ProductsProvider';
import ProductGallery from './ProductGallery';
import SectionInfo from './SectionInfo';
import ShopActions from './ShopActions';
const Shop = () => {
	const [cartItems, setCartItems] = useState([]);
	const handleAddToCart = (product) => {
		setCartItems([...cartItems, product]);
	};
	const handleRemoveFromCart = (productId) => {
		setCartItems(cartItems.filter((cartItem) => cartItem.id !== productId));
	};
	return (
		<div className="pt-16 sm:pt-24 lg:pt-40">
			<ProductsProvider>
				<SectionInfo />
				<ShopActions cartItems={cartItems} />
				<ProductGallery
					cartItems={cartItems}
					addToCart={handleAddToCart}
					removeFromCart={handleRemoveFromCart}
				/>
			</ProductsProvider>
		</div>
	);
};

export default Shop;
