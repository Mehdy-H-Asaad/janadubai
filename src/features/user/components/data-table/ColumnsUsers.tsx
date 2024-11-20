import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { TUserDTO } from "../../types";
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
];
