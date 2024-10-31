import { useEffect, useState } from 'react';
import ArrowDown from '../icons/ArrowDown';
const Filter = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then((res) => res.json())
			.then((json) => setCategories(json));
	}, []);
	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
					id="filter-button"
					aria-expanded="false"
					aria-haspopup="true"
					onClick={() => setShowFilter(!showFilter)}
				>
					Filter
					<ArrowDown />
				</button>
			</div>
			{/* <!-- Filter options --> */}
			{showFilter && (
				<div
					className="absolute z-40 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="filter-button"
					tabIndex="-1"
					id="filter-dropdown"
				>
					<div className="py-1" role="none">
						{categories.map((category) => (
							<label
								key={category}
								className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
							>
								<input
									type="checkbox"
									className="form-checkbox h-4 w-4"
									id="filter-option-1"
								/>
								<span className="ml-2">{category}</span>
							</label>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Filter;
