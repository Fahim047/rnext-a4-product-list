import { createContext, useContext, useEffect, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((error) => console.log(error));
	}, []);
	return (
		<ProductsContext.Provider value={{ data, setData }}>
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
