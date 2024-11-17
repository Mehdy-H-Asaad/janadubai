import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteProduct } from "@/features/product/hooks/useDeleteProduct";
import { TProductDTO } from "@/features/product/types";

import { UpdateProductDialog } from "./UpdateProductDialog";

export const ColumnsProduct: ColumnDef<TProductDTO>[] = [
	{
		accessorKey: "name",
		header: "Product name",
	},
	{
		accessorKey: "images",
		header: "Product image",
		cell: ({ row }) => {
			const images = row.original.images;

			return (
				<img
					src={`data:${images[0].mime_type};base64,${images[0].content}`}
					alt=""
					className="size-24 rounded-md"
				/>
			);
		},
	},
	{
		accessorKey: "category_name",
		header: "Category name",
	},

	{
		id: "actions",
		header: "Options",
		cell: ({ row }) => {
			const product = row.original;

			const { deleteProduct } = useDeleteProduct();

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => deleteProduct(product.id)}
							className="bg-red-600 text-white hover:!bg-red-600 hover:!text-white cursor-pointer"
						>
							Delete product
						</DropdownMenuItem>
						<UpdateProductDialog {...product} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
