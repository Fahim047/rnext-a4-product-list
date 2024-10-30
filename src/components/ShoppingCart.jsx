import Cart from '../icons/Cart';

const ShoppingCart = () => {
	return (
		<div>
			<a href="#" class="group -m-2 flex items-center p-2">
				<Cart />
				<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
					0
				</span>
			</a>
		</div>
	);
};

export default ShoppingCart;
