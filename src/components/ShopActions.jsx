import Filter from './Filter';
import SearchBox from './SearchBox';
import ShoppingCart from './ShoppingCart';
import Sort from './Sort';

const ShopActions = () => {
	return (
		<div class="mt-10">
			<div class="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
				{/* <!-- Sort & Filter--> */}
				<div class="w-full">
					<Sort />
					<Filter />
				</div>

				{/* <!-- Search and Cart --> */}
				<div class="flex gap-2 items-center">
					<SearchBox />
					<ShoppingCart />
				</div>
			</div>
		</div>
	);
};

export default ShopActions;
