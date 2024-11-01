import Cart from '../icons/Cart';
const ProductCard = ({ product, cartItems, addToCart, removeFromCart }) => {
	const { id, image, title, category, price } = product;
	const isProductInCart = cartItems.some(
		(cartItem) => cartItem.id === product.id
	);
	return (
		<div className="relative flex flex-col border p-4 rounded-lg">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
				<img
					src={image}
					alt="Front of men&#039;s Basic Tee in black."
					className="h-full w-full object-cover object-top lg:h-full lg:w-full  bg-gray-100"
				/>
			</div>
			<div className="mt-4 px-3 pb-4 flex-grow">
				<div>
					<h3 className="font-bold text-gray-700">{title}</h3>
					<p className="mt-1 text-sm text-gray-500 capitalize">{category}</p>
				</div>
				<p className="font-medium text-gray-900 mt-1 text-2xl">${price}</p>
			</div>
			{/* <!-- Button --> */}
			<button
				className={`flex items-center justify-center font-medium leading-5 rounded-md text-[0.8125rem] mx-3 px-4 py-2 gap-2 transition-all duration-200 border
					${
						isProductInCart
							? 'border-red-500 bg-red-50 text-red-500 hover:bg-red-100' // Remove from cart style
							: 'hover:ring-1 hover:ring-slate-700/20 hover:bg-slate-50 hover:text-slate-900' // Add to cart style
					}
				`}
				onClick={() =>
					isProductInCart ? removeFromCart(id) : addToCart(product)
				}
			>
				<Cart />
				{isProductInCart ? 'Remove from cart' : 'Add to cart'}
			</button>
		</div>
	);
};

export default ProductCard;
