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
import { TProjectDTO } from "@/features/projects/types";
import { useDeleteProject } from "../../../index";
import { UpdateProjectDialog } from "../../../index";
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

export const ColumnsProject: ColumnDef<TProjectDTO>[] = [
	{
		accessorKey: "name",
		header: "Project name",
	},
	{
		accessorKey: "images",
		header: "Project image",
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
		header: "Category",
	},

	{
		id: "actions",
		header: "Options",
		cell: ({ row }) => {
			const project = row.original;

			const { deleteProject } = useDeleteProject();

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
						<AlertDialog>
							<AlertDialogTrigger className="bg-red-600 duration-200 text-white hover:!bg-red-800 hover:!text-white cursor-pointer px-2 py-1 flex rounded-sm">
								Delete project
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
										onClick={() => deleteProject(project.id)}
									>
										<MainButton
											className="!bg-golden duration-200 hover:!bg-white hover:text-black"
											title="Continue"
										/>
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
						<UpdateProjectDialog {...project} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
