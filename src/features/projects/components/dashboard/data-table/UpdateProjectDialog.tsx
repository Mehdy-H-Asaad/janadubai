import { MainButton } from "@/components/MainButton";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@/components/ui/select";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useGetCategories } from "@/features/category";
import { useUpdateProjectForm } from "@/features/projects/state/update-project.schema";
import { arrayBufferToBase64 } from "@/utils/arrayBufferToBase64";
import { ChangeEvent, useEffect } from "react";
import { TProjectDTO } from "@/features/projects/types";

export const UpdateProjectDialog = (project: TProjectDTO) => {
	const { categories } = useGetCategories();

	const {
		addNewDescription,
		addNewImg,
		description,
		onUpdateProject,
		projectImages,
		removeDescription,
		removeImg,
		updateProjectForm,
	} = useUpdateProjectForm();

	const handleImgChange = async (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files) {
			const newImages = await Promise.all(
				Array.from(files).map(async file => {
					const arrayBuffer = await file.arrayBuffer();
					const base64String = arrayBufferToBase64(arrayBuffer); // Convert to Base64
					return {
						content: base64String,
						mime_type: file.type,
					};
				})
			);

			addNewImg(newImages);
		}
	};

	useEffect(() => {
		if (updateProjectForm) {
			updateProjectForm.reset(project);
		}
	}, [updateProjectForm]);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full bg-transparent text-black hover:bg-transparent">
					Edit Project
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[700px] bg-black border border-gray-700 text-white">
				<DialogHeader>
					<DialogTitle>Update Project</DialogTitle>
					<DialogDescription>
						Make changes to your project here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<ScrollArea className="h-[400px]">
					<div className="grid gap-10 py-4 px-1 ">
						<Form {...updateProjectForm}>
							<form
								onSubmit={updateProjectForm.handleSubmit(values =>
									onUpdateProject(values, project.id)
								)}
								className="flex flex-col gap-5"
							>
								<FormField
									control={updateProjectForm.control}
									name="name"
									render={({ field }) => (
										<FormItem className="grid w-full max-w-sm items-center gap-1.5">
											<FormLabel>Project Name</FormLabel>
											<FormControl>
												<Input
													className="bg-transparent border border-gray-700"
													{...field}
													placeholder="Project Name"
													type="text"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={updateProjectForm.control}
									name="category_id"
									render={({ field }) => (
										<FormItem className="grid w-full max-w-sm items-center gap-1.5 ">
											<FormLabel>Category</FormLabel>
											<FormControl>
												<Select
													value={field.value}
													onValueChange={value => {
														// Pass the selected category ID to field.onChange to update form state
														field.onChange(value);
													}}
												>
													<SelectTrigger className="w-[180px] bg-transparent border-gray-700">
														<SelectValue
															placeholder={
																categories?.find(
																	cat => cat.id.toString() === field.value
																)?.name || "Select a category"
															}
														/>
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															<SelectLabel>Categories</SelectLabel>

															{categories
																?.filter(cat => cat.type === "projects")
																.map(category => (
																	<SelectItem value={category.id.toString()}>
																		{category.name}
																	</SelectItem>
																))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex flex-col gap-6 mb-10">
									{description.map((_, index) => (
										<FormField
											control={updateProjectForm.control}
											name={`description.${index}`}
											render={({ field }) => (
												<FormItem className="grid w-full max-w-sm items-center gap-1.5 ">
													<FormLabel className="flex items-center justify-between">
														Description
														<MdDelete
															onClick={() => removeDescription(index)}
															size={24}
															className="cursor-pointer duration-300 hover:text-red-700"
														/>
													</FormLabel>
													<FormControl>
														<Textarea
															{...field}
															placeholder="Project description"
															className="bg-transparent border-gray-700"
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									))}
									<IoIosAddCircleOutline
										size={30}
										className="cursor-pointer"
										onClick={() => addNewDescription()}
									/>
								</div>
								<div className="flex-1 flex-col flex gap-10">
									<FormField
										control={updateProjectForm.control}
										name="images"
										render={() => (
											<FormItem>
												<FormLabel>Project Images</FormLabel>
												<FormControl>
													<div className="relative flex-col gap-4 size-60 bg-transparent border border-dashed rounded-md flex items-center justify-center border-gray-700 ">
														<div>Upload your product image</div>
														<Input
															type="file"
															accept="image/*"
															multiple
															onChange={handleImgChange}
															className="bg-transparent border-gray-700 cursor-pointer absolute size-full opacity-0"
														/>
														<IoIosAddCircleOutline size={40} />
													</div>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="grid grid-cols-4 gap-4">
										{projectImages.map((field, index) => (
											<div key={field.id} className="flex flex-col gap-2">
												<MdDelete
													size={20}
													className="cursor-pointer duration-200 hover:text-red-600"
													onClick={() => removeImg(index)}
												/>
												<img
													src={`data: ${field.mime_type};base64,${field.content} `}
													className="size-32 object-contain p-2 border border-dashed border-gray-700 rounded-md"
													alt="product img"
												/>
											</div>
										))}
									</div>
								</div>
								<MainButton type="submit" title="Update Project" />
							</form>
						</Form>
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};
