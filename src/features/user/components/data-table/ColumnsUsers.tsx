import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuSeparator,
// 	DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { TUserDTO } from "../../index";
import { formatDate } from "@/utils/formateDate";

export const ColumnsUser: ColumnDef<TUserDTO>[] = [
	{
		accessorKey: "username",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Username
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{ accessorKey: "role", header: "Role" },
	{
		accessorKey: "created_at",
		header: "Joined",
		cell: ({ row }) => {
			const date = row.original.created_at;
			return <div className="font-medium">{formatDate(date)}</div>;
		},
	},
	// {
	// 	id: "actions",
	// 	header: "Options",
	// 	cell: ({ row }) => {
	// 		const user = row.original;

	// 		// const { deleteCategory } = useDeleteCategory();

	// 		return (
	// 			<DropdownMenu>
	// 				<DropdownMenuTrigger asChild>
	// 					<Button variant="ghost" className="h-8 w-8 p-0">
	// 						<span className="sr-only">Open menu</span>
	// 						<MoreHorizontal className="h-4 w-4" />
	// 					</Button>
	// 				</DropdownMenuTrigger>
	// 				<DropdownMenuContent align="end">
	// 					<DropdownMenuLabel>Actions</DropdownMenuLabel>
	// 					<DropdownMenuSeparator />
	// 					<DropdownMenuItem
	// 						// onClick={() => deleteCategory(category.id)}
	// 						className="bg-red-600 text-white hover:!bg-red-600 hover:!text-white cursor-pointer"
	// 					>
	// 						Delete User
	// 					</DropdownMenuItem>
	// 				</DropdownMenuContent>
	// 			</DropdownMenu>
	// 		);
	// 	},
	// },
];
