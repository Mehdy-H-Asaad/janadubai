import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCategories } from "@/features/category";
import { useGetProducts } from "@/features/product";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, ChangeEvent, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

export const SearchFeature = () => {
	const [searchInputValue, setSearchInputValue] = useState<string>("");
	const [categoryId, setCateogryId] = useState<string>("");

	const [searchParams, setSearchParams] = useSearchParams();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInputValue(e.target.value);
		updateSearchParams(
			{ product: searchInputValue },
			searchParams,
			setSearchParams
		);
	};

	const handleCategoryChange = (selectedCategory: string) => {
		const newCategoryId =
			selectedCategory === categoryId ? "" : selectedCategory;
		setCateogryId(selectedCategory);
		updateSearchParams(
			{ searchCategoryId: newCategoryId },
			searchParams,
			setSearchParams
		);
	};
	useEffect(() => {
		setSearchParams("");
	}, []);

	const { categories } = useGetCategories();
	const { products, isLoadingProducts } = useGetProducts({
		selectedCategoryId: Number(categoryId),
	});
	const productsCategories = categories?.filter(cat => cat.type === "products");

	const filteredProducts =
		searchInputValue &&
		products?.filter(product => {
			return (
				(!categoryId || product.category_id == categoryId) &&
				product.name.toLowerCase().includes(searchInputValue.toString())
			);
		});
	return (
		<div className="bg-black p-4 flex items-center justify-center flex-col relative">
			<div className="flex items-center justify-center bg-primary-black rounded-md w-[40rem] text-white font-[500] ">
				<Input
					onChange={handleInputChange}
					placeholder="Search for products"
					className="flex-[2] focus-visible:ring-0 focus-visible:ring-offset-0 border-none bg-transparent p-4"
				/>
				<Select onValueChange={handleCategoryChange}>
					<SelectTrigger className="flex-1 rounded-none border-t-0 border-b-0 border-gray-700 bg-primary-black text-white focus-visible:ring-0 focus-visible:ring-offset-0 rounded-r-none ">
						<SelectValue
							placeholder="Select a category"
							className=" outline-none"
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{productsCategories?.map(cat => (
								<SelectItem value={cat.id.toString()}>{cat.name}</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className=" w-20 flex items-center justify-center h-10">
					<IoSearch size={24} className="text-white block " />
				</div>
			</div>

			<div className="absolute top-14 z-10">
				<ScrollArea className="h-80">
					<div className=" text-white w-[40rem] flex bg-primary-black items-center flex-wrap rounded-md">
						{searchInputValue ? (
							isLoadingProducts ? (
								Array.from({ length: 6 }).map(_ => (
									<div className="flex items-center gap-2 basis-full p-4">
										<Skeleton className="size-20" />
										<div className="flex flex-col gap-4">
											<Skeleton className="w-52 h-2" />
											<Skeleton className="w-32 h-2" />
										</div>
									</div>
								))
							) : filteredProducts && filteredProducts.length === 0 ? (
								<div className="text-xl font-bold text-golden p-4">
									No Products
								</div>
							) : (
								filteredProducts &&
								filteredProducts.map(filteredProduct => (
									<div className="flex items-center gap-2 basis-full p-4 border border-gray-700">
										<img
											src={`data:${filteredProduct.images[0].mime_type};base64,${filteredProduct.images[0].content}`}
											alt=""
											className="size-20"
										/>
										<div>{filteredProduct.name}</div>
									</div>
								))
							)
						) : (
							""
						)}
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};
