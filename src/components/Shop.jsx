import ArrowDown from '../icons/ArrowDown';
import Cart from '../icons/Cart';
import Magnify from '../icons/Magnify';
import ProductGallery from './ProductGallery';
import SectionInfo from './SectionInfo';

const Shop = () => {
	return (
		<div class="pt-16 sm:pt-24 lg:pt-40">
			<SectionInfo />
			<div class="mt-10">
				<div class="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					{/* <!-- Sort & Filter--> */}
					<div class="w-full">
						{/* <!-- Sort Start --> */}
						<div class="relative inline-block text-left">
							<div>
								<button
									type="button"
									class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
									id="menu-button"
									aria-expanded="true"
									aria-haspopup="true"
								>
									Sort
									<ArrowDown />
								</button>
							</div>

							{/* <!-- Sort Options --> */}
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
						</div>
						{/* <!-- Sort End --> */}

						{/* <!-- Filter Start --> */}
						<div class="relative inline-block text-left">
							<div>
								<button
									type="button"
									class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
									id="filter-button"
									aria-expanded="false"
									aria-haspopup="true"
								>
									Filter
									<ArrowDown />
								</button>
							</div>
							{/* <!-- Filter options --> */}
							<div
								class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="filter-button"
								tabindex="-1"
								id="filter-dropdown"
							>
								<div class="py-1" role="none">
									<label class="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
										<input
											type="checkbox"
											class="form-checkbox h-4 w-4"
											id="filter-option-1"
										/>
										<span class="ml-2">Category 1</span>
									</label>
									<label class="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
										<input
											type="checkbox"
											class="form-checkbox h-4 w-4"
											id="filter-option-2"
										/>
										<span class="ml-2">Category 2</span>
									</label>
									<label class="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
										<input
											type="checkbox"
											class="form-checkbox h-4 w-4"
											id="filter-option-3"
										/>
										<span class="ml-2">Category 3</span>
									</label>
								</div>
							</div>
						</div>
						{/* <!-- Filter End --> */}
					</div>

					{/* <!-- Search and Cart --> */}
					<div class="flex gap-2 items-center">
						{/* <!-- Search --> */}
						<div class="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
							<Magnify />
							<input
								class="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
								placeholder="Find anything..."
								aria-label="Search components"
								id="headlessui-combobox-input-:r5n:"
								role="combobox"
								type="text"
								aria-expanded="false"
								aria-autocomplete="list"
								// style="caret-color: rgb(107, 114, 128)"
							/>
						</div>

						{/* <!-- Cart --> */}
						<div class="flow-root">
							<a href="#" class="group -m-2 flex items-center p-2">
								<Cart />
								<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
									0
								</span>
								<span class="sr-only">items in cart, view bag</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<ProductGallery />
		</div>
	);
};

export default Shop;
