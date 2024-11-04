import { createContext, useContext, useEffect, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				setData(json);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, []);
	return (
		<ProductsContext.Provider value={{ data, setData, loading, setLoading }}>
			{children}
		</ProductsContext.Provider>
	);
};
export default ProductsProvider;

export const useProducts = () => {
	const context = useContext(ProductsContext);
	if (context === undefined) {
		throw new Error('useProducts must be used within a ProductsProvider');
	}
	return context;
};
