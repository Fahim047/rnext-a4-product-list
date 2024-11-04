import { useEffect, useState } from 'react';
import { useProducts } from '../contexts/ProductsProvider';
import Filter from './Filter';
import SearchBox from './SearchBox';
import ShoppingCart from './ShoppingCart';
import Sort from './Sort';

const ShopActions = ({ cartItems }) => {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [sortOrder, setSortOrder] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const { setData, setLoading } = useProducts();
	const handleFilteredData = (products) => {
		const filteredData = products.filter((product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setData(filteredData);
	};
	useEffect(() => {
		setLoading(true);
		let url = 'https://fakestoreapi.com/products';
		if (selectedCategory) url += `/category/${selectedCategory}`;
		if (sortOrder) url += `?sort=${sortOrder}`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				handleFilteredData(json);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, [selectedCategory, sortOrder, searchTerm]);
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
					<SearchBox setSearchTerm={setSearchTerm} />
					<ShoppingCart cartItems={cartItems} />
				</div>
			</div>
		</div>
	);
};

export default ShopActions;
