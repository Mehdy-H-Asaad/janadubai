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
import { useDeleteCategory } from "../../index";

type TColumnsCategories = {
	id: number;
	name: string;
	type: string;
};

export const ColumnsCategories: ColumnDef<TColumnsCategories>[] = [
	{
		accessorKey: "name",
		header: "Category name",
	},
	{ accessorKey: "type", header: "Category type" },

	{
		id: "actions",
		header: "Options",
		cell: ({ row }) => {
			const category = row.original;

			const { deleteCategory } = useDeleteCategory();

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
							onClick={() => deleteCategory(category.id)}
							className="bg-red-600 text-white hover:!bg-red-600 hover:!text-white cursor-pointer"
						>
							Delete category
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
