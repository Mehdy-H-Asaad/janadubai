import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useDeleteQuestion } from "@/features/questions/hooks/useDeleteQuestion";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useReplyForm } from "../../../index";
import { TQuestionDTO } from "@/features/questions/types";
import { MainButton } from "@/components/MainButton";

export const ColumnsQuestions: ColumnDef<TQuestionDTO>[] = [
	{
		accessorKey: "name",
		header: "Full name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "company",
		header: "Company",
	},
	{
		accessorKey: "phone",
		header: "Phone",
	},

	{
		id: "actions",
		header: "Message",
		cell: ({ row }) => {
			const question = row.original;

			const { deleteQuestion } = useDeleteQuestion();

			const { onReply, replyForm } = useReplyForm(question);

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Show message</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => deleteQuestion(question.id)}
							className="bg-red-600 text-white hover:!bg-red-600 hover:!text-white cursor-pointer"
						>
							Delete question
						</DropdownMenuItem>
						<Dialog>
							<DialogTrigger asChild>
								<Button className=" bg-transparent text-black hover:bg-transparent">
									Show message
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[600px] bg-black border border-gray-700 text-white">
								<DialogHeader>
									<DialogTitle>Reply to the message</DialogTitle>
								</DialogHeader>
								<ScrollArea className="h-[400px]">
									{/* <div className=" flex flex-col gap-10 py-4 px-1"> */}
									<Form {...replyForm}>
										<form
											className=" flex flex-col gap-10 py-4 px-1"
											onSubmit={replyForm.handleSubmit(onReply)}
										>
											<div>
												<FormLabel className="text-golden">Message:</FormLabel>
												<Textarea
													value={question.message}
													className="bg-transparent border border-gray-700"
												/>
											</div>

											<FormField
												control={replyForm.control}
												name="message"
												render={({ field }) => (
													<FormItem>
														<FormLabel className="text-golden">
															Reply:
														</FormLabel>
														<FormControl>
															<Textarea
																{...field}
																className="bg-transparent border border-gray-700"
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<DialogFooter>
												<button>
													<MainButton type="submit" title="Reply" />
												</button>
											</DialogFooter>
										</form>
									</Form>
								</ScrollArea>
							</DialogContent>
						</Dialog>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
