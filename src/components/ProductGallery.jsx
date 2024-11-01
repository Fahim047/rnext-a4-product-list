import React from 'react';
import { useProducts } from '../contexts/ProductsProvider';
import Loader from './Loader';
import ProductCard from './ProductCard';

const ProductGallery = () => {
	const { data, setData } = useProducts();
	if (data.length === 0) {
		return <Loader />;
	}
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{/* <!-- Card --> */}
					{data.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
