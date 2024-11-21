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
import { TProjectDTO } from "@/features/projects/types";
import { useDeleteProject } from "../../../index";
import { UpdateProjectDialog } from "../../../index";

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
						<DropdownMenuItem
							onClick={() => deleteProject(project.id!)}
							className="bg-red-600 text-white hover:!bg-red-600 hover:!text-white cursor-pointer"
						>
							Delete project
						</DropdownMenuItem>
						<UpdateProjectDialog {...project} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
