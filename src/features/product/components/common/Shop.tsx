import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@/components/ui/select";
import { useGetProducts } from "@/features/product/hooks/useGetProducts";
import { useGetCategories } from "@/features/category";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ProductCard } from "@/features/product";
import { PaginationButtons } from "@/components/PaginationButtons";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { Skeleton } from "@/components/ui/skeleton";
export const Shop = () => {
	const [page, setPage] = useState<number>(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const [categoryId, setCategoryId] = useState<string | null>(
		searchParams.get("categoryId") || ""
	);

	const { products, isLoadingProducts } = useGetProducts({
		page,
		limit: 10,
	});

	const { categories } = useGetCategories({ type: "products" });

	const handleParamCategoryClick = (selectedCategoryId: string) => {
		const newCategoryId =
			categoryId === selectedCategoryId ? "" : selectedCategoryId;
		setPage(1);
		setCategoryId(newCategoryId);
		updateSearchParams(
			{ categoryId: newCategoryId },
			searchParams,
			setSearchParams
		);
	};

	const handleNextPage = () => {
		setPage(page => page + 1);
	};
	const hanldePreviousPage = () => {
		setPage(page => page - 1);
	};

	return (
		<div className="bg-primary-black py-10">
			<PageBreadCrumb
				breadcrumbLinkName="Home"
				breadcrumbLink="/"
				breadcrumbPage="Shop"
			/>
			<div className="container">
				<div className="my-10">
					<div className="flex items-center justify-between gap-8 flex-col sm:flex-row ">
						<p className="text-white">Showing 1-10 results</p> {/*of 33*/}
						<Select onValueChange={handleParamCategoryClick}>
							<SelectTrigger className="w-[180px] bg-transparent text-white ml-0 sm:ml-auto">
								<SelectValue placeholder="Select category" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Categories</SelectLabel>
									{categories?.map(category => (
										<SelectItem
											key={category.id}
											value={category.id.toString()}
										>
											{category.name}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
						{isLoadingProducts ? (
							Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="flex flex-col gap-7">
									<Skeleton className="size-72" />
									<Skeleton className="w-[200px] h-2 " />
								</div>
							))
						) : products && products.length === 0 ? (
							<div className="text-xl font-bold text-golden">No Products</div>
						) : (
							products &&
							products.map(product => (
								<ProductCard
									key={product.id}
									id={product.id}
									image={product.images}
									title={product.name}
								/>
							))
						)}
					</div>
				</div>

				<PaginationButtons
					arr={products || []}
					handleNextPage={handleNextPage}
					hanldePreviousPage={hanldePreviousPage}
					page={page}
				/>
			</div>
		</div>
	);
};
