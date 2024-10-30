import Navbar from './Navbar';
const Header = () => {
	return (
		<header>
			<p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
				Get free delivery on orders over $100
			</p>
			<Navbar />
		</header>
	);
};

export default Header;
