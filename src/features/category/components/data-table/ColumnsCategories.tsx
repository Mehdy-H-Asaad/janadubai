import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteCategory } from "../../index";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MainButton } from "@/components/MainButton";

type TColumnsCategories = {
	id: number;
	name: string;
	type: string;
};

export const ColumnsCategories: ColumnDef<TColumnsCategories>[] = [
	{
		accessorKey: "name",
		header: "Category",
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
						<DropdownMenuLabel>Options</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<AlertDialog>
							<AlertDialogTrigger className="bg-red-600 duration-200 text-white hover:!bg-red-800 hover:!text-white cursor-pointer px-2 py-1 flex rounded-sm">
								Delete category
							</AlertDialogTrigger>
							<AlertDialogContent className="bg-black text-white">
								<AlertDialogHeader>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone. This will permanently delete
										your account and remove your data from our servers.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel className="bg-black text-white duration-200">
										Cancel
									</AlertDialogCancel>
									<AlertDialogAction
										asChild
										onClick={() => deleteCategory(category.id)}
									>
										<MainButton
											className="!bg-golden duration-200 hover:!bg-white hover:text-black"
											title="Continue"
										/>
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
