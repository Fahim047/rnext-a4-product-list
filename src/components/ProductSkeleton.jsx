import React from 'react';

const ProductSkeleton = () => {
	return (
		<div class="bg-white p-4 rounded-lg shadow animate-pulse">
			{/* <!-- Image skeleton --> */}
			<div class="bg-gray-300 h-48 rounded-md mb-4"></div>
			{/* <!-- Title skeleton --> */}
			<div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
			{/* <!-- Category skeleton --> */}
			<div class="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
			{/* <!-- Price skeleton --> */}
			<div class="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
			{/* <!-- Button skeleton --> */}
			<div class="h-10 bg-gray-300 rounded"></div>
		</div>
	);
};

export default ProductSkeleton;
