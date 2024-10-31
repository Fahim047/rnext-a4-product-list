import React from 'react';
import ProductSkeleton from './ProductSkeleton';

const Loader = () => {
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div class="bg-white">
			<div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{/* <!-- Card --> */}
					{skeletons.map((item) => (
						<ProductSkeleton key={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Loader;
