import MainTitle from "@/components/MainTitle";
import { Skeleton } from "@/components/ui/skeleton";
import {
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	Table,
	TableCell,
} from "@/components/ui/table";
import { useGetProducts } from "@/features/product";

export const TableProducts = () => {
	const { products, isLoadingProducts } = useGetProducts({ limit: 5 });

	return (
		<div className="flex flex-col">
			<div className="flex justify-start">
				<MainTitle
					heading="A list of your recent products."
					subHeading="Products"
				/>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[300px]">Proudct Name</TableHead>
						<TableHead className="w-[300px]">Proudct Image</TableHead>
						<TableHead className="w-[300px]">Cateogry</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{isLoadingProducts ? (
						<div className="flex flex-col gap-10 justify-center mt-10">
							{Array.from({ length: 4 }).map(_ => (
								<div className="flex flex-col gap-5">
									<Skeleton className="w-full h-2" />
									<Skeleton className="w-40 h-2" />
								</div>
							))}
						</div>
					) : (
						products?.map(product => (
							<TableRow key={product.id}>
								<TableCell className="font-medium">{product.name}</TableCell>

								<TableCell>
									<img
										src={`data:${product.images[0].mime_type};base64,${product.images[0].content}`}
										alt=""
										className="size-20 rounded-md "
									/>
								</TableCell>
								<TableCell>{product.category_name}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
};
