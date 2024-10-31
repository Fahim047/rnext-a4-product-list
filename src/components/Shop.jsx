import ProductsProvider from '../contexts/ProductsProvider';
import ProductGallery from './ProductGallery';
import SectionInfo from './SectionInfo';
import ShopActions from './ShopActions';
const Shop = () => {
	return (
		<div class="pt-16 sm:pt-24 lg:pt-40">
			<ProductsProvider>
				<SectionInfo />
				<ShopActions />
				<ProductGallery />
			</ProductsProvider>
		</div>
	);
};

export default Shop;
