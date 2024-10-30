import { useState } from 'react';
import ArrowDown from '../icons/ArrowDown';

const Sort = () => {
	const [showSort, setShowSort] = useState(false);
	return (
		<div class="relative inline-block text-left">
			<div>
				<button
					type="button"
					class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={() => setShowSort(!showSort)}
				>
					Sort
					<ArrowDown />
				</button>
			</div>

			{/* <!-- Sort Options --> */}
			{showSort && (
				<div
					class="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						<span
							class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
							role="menuitem"
							tabindex="-1"
							onclick="toggleDropdown()"
							id="menu-item-0"
						>
							Low to High
						</span>
						<span
							href=""
							class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
							role="menuitem"
							tabindex="-1"
							onclick="toggleDropdown()"
							id="menu-item-0"
						>
							High to Low
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sort;
