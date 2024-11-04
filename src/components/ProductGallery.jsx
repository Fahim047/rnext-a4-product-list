import React from 'react';
import { useProducts } from '../contexts/ProductsProvider';
import Loader from './Loader';
import ProductCard from './ProductCard';

const ProductGallery = ({ cartItems, addToCart, removeFromCart }) => {
	const { data, setData, loading } = useProducts();
	if (loading) {
		return <Loader />;
	}
	if (data.length === 0) {
		return (
			<div className="w-full min-h-[200px] flex items-center justify-center">
				<h2 className="text-3xl text-gray-500">🔍 No Products found!!!</h2>
			</div>
		);
	}
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{/* <!-- Card --> */}
					{data.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							cartItems={cartItems}
							addToCart={addToCart}
							removeFromCart={removeFromCart}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
