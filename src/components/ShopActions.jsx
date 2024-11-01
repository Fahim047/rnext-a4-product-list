import { useEffect, useState } from 'react';
import { useProducts } from '../contexts/ProductsProvider';
import Filter from './Filter';
import SearchBox from './SearchBox';
import ShoppingCart from './ShoppingCart';
import Sort from './Sort';

const ShopActions = () => {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [sortOrder, setSortOrder] = useState('');
	const { setData } = useProducts();
	useEffect(() => {
		let url = 'https://fakestoreapi.com/products';
		if (selectedCategory) url += `/category/${selectedCategory}`;
		if (sortOrder) url += `?sort=${sortOrder}`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((error) => console.log(error));
	}, [selectedCategory, sortOrder]);
	return (
		<div className="mt-10">
			<div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
				{/* <!-- Sort & Filter--> */}
				<div className="w-full">
					<Sort setSortOrder={setSortOrder} />
					<Filter
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
				</div>

				{/* <!-- Search and Cart --> */}
				<div className="flex gap-2 items-center">
					<SearchBox />
					<ShoppingCart />
				</div>
			</div>
		</div>
	);
};

export default ShopActions;
