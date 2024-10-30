import ProductGallery from './ProductGallery';
import SectionInfo from './SectionInfo';
import ShopActions from './ShopActions';

const Shop = () => {
	return (
		<div class="pt-16 sm:pt-24 lg:pt-40">
			<SectionInfo />
			<ShopActions />
			<ProductGallery />
		</div>
	);
};

export default Shop;
