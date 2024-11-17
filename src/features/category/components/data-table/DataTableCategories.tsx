import { Button } from "@/components/ui/button";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	SortingState,
	getSortedRowModel,
	VisibilityState,
	ColumnFiltersState,
	getFilteredRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { MainButton } from "@/components/MainButton";

import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useCreateCategorySchema } from "../../schema/create-category.schema";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTableCategories<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
		onRowSelectionChange: setRowSelection,
	});

	const { createCategoryForm, onCreateCategory } = useCreateCategorySchema();

	return (
		<div>
			<div className="flex items-center justify-between py-4 gap-10">
				<Input
					placeholder="Search by name"
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={event =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
					className="max-w-sm bg-transparent border-gray-700"
				/>
				<Dialog>
					<DialogTrigger asChild>
						<button>
							<MainButton type="button" title="Create category" />
						</button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px] bg-black text-white">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<Form {...createCategoryForm}>
							<form
								onSubmit={createCategoryForm.handleSubmit(onCreateCategory)}
								className="grid gap-4 py-4"
							>
								<FormField
									control={createCategoryForm.control}
									name="name"
									render={({ field }) => (
										<FormItem className="">
											<FormLabel className="text-right">Name</FormLabel>
											<FormControl>
												<Input
													{...field}
													className="col-span-3 bg-transparent border-gray-700"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={createCategoryForm.control}
									name="type"
									render={({ field }) => (
										<FormItem className="">
											<FormLabel className="text-right">Type</FormLabel>
											<FormControl>
												<Select
													value={field.value}
													onValueChange={field.onChange}
												>
													<SelectTrigger className="w-[180px] bg-transparent border-gray-700">
														<SelectValue placeholder="Select category type" />
													</SelectTrigger>
													<SelectContent className="bg-black text-white border border-gray-700">
														<SelectGroup>
															<SelectLabel>Type</SelectLabel>
															<SelectItem value="projects">Projects</SelectItem>
															<SelectItem value="products">Products</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<DialogFooter>
									<MainButton type="submit" title="Save changes" />
								</DialogFooter>
							</form>
						</Form>
					</DialogContent>
				</Dialog>
			</div>
			<div className="rounded-md border border-gray-700">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow className="border border-gray-700" key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									className="border border-gray-700"
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					className="bg-transparent border border-gray-700 cursor-pointer"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					className="bg-transparent border border-gray-700 cursor-pointer"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
