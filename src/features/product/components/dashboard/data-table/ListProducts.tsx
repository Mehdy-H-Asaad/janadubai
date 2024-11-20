import { Skeleton } from "@/components/ui/skeleton";
import { useGetProducts } from "../../../index";
import { ColumnsProduct } from "../../../index";
import { DataTableProduct } from "../../../index";
import MainTitle from "@/components/MainTitle";

export const ListProducts = () => {
	const { products, isLoadingProducts } = useGetProducts({ limit: 10 });

	return (
		<div className="container">
			<MainTitle heading="List of your products" subHeading="Products" />
			{isLoadingProducts ? (
				<div className="flex flex-col gap-10 justify-center mt-10">
					<div className="flex items-center justify-between gap-10">
						<Skeleton className="w-60 h-6" />
						<Skeleton className="w-40 h-6" />
					</div>
					{Array.from({ length: 10 }).map((_, index) => (
						<div key={index} className="flex flex-col gap-5">
							<Skeleton className="w-600 h-3" />
							<Skeleton className="w-40 h-3" />
						</div>
					))}
				</div>
			) : (
				<DataTableProduct columns={ColumnsProduct} data={products || []} />
			)}
		</div>
	);
};
