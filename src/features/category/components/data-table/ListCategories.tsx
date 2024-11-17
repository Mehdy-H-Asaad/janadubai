import MainTitle from "@/components/MainTitle";
import { useGetCategories } from "../../index";
import { ColumnsCategories } from "../../index";
import { DataTableCategories } from "../../index";
import { Skeleton } from "@/components/ui/skeleton";

export const ListCategories = () => {
	const { categories, isLoadingCategories } = useGetCategories();

	return (
		<div className="container mx-auto py-10">
			<MainTitle
				heading="Categories of your products"
				subHeading="All Categories"
			/>
			{isLoadingCategories ? (
				<div className="flex flex-col gap-10 justify-center mt-10">
					<div className="flex items-center justify-between">
						<Skeleton className="w-60 h-6" />
						<Skeleton className="w-40 h-6" />
					</div>
					{Array.from({ length: 10 }).map(_ => (
						<div className="flex flex-col gap-5">
							<Skeleton className="w-600 h-3" />
							<Skeleton className="w-40 h-3" />
						</div>
					))}
				</div>
			) : (
				<DataTableCategories
					columns={ColumnsCategories}
					data={categories || []}
				/>
			)}
		</div>
	);
};
