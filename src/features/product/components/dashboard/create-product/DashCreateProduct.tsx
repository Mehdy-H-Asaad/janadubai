import MainTitle from "@/components/MainTitle";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";
import { MainButton } from "@/components/MainButton";
import { useGetCategories } from "@/features/category";

import { arrayBufferToBase64 } from "@/utils/arrayBufferToBase64";
import { useCreateProdcutForm } from "../../../index";

export const DashCreateProduct = () => {
	const { categories } = useGetCategories({ type: "products" });

	const {
		createProductForm,
		onCreateProduct,
		addNewDescription,
		addNewImg,
		description,
		images,
		removeDescription,
		removeImg,
		isCreatingProduct,
	} = useCreateProdcutForm();

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

	return (
		<div>
			<MainTitle
				heading="Add your product info"
				subHeading="Product Infomation"
			/>

			<Form {...createProductForm}>
				<form onSubmit={createProductForm.handleSubmit(onCreateProduct)}>
					<div className="flex justify-between gap-10 flex-col md:flex-row">
						<div className="flex flex-col gap-10 flex-1">
							<FormField
								control={createProductForm.control}
								name="name"
								render={({ field }) => (
									<FormItem className="grid w-full  items-center gap-1.5">
										<FormLabel>Product Name</FormLabel>
										<FormControl>
											<Input
												className="bg-transparent border border-gray-700"
												{...field}
												placeholder="Product Name"
												type="text"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={createProductForm.control}
								name="category_id"
								render={({ field }) => (
									<FormItem className="grid w-full  items-center gap-1.5 ">
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
															categories?.find(cat => {
																cat.id.toString() === field.value.toString();
															})?.name || "Select a category"
														}
													/>
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Categories</SelectLabel>

														{categories?.map(category => (
															<SelectItem
																key={category.id}
																value={category.id.toString()}
															>
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
										key={index}
										control={createProductForm.control}
										name={`description.${index}`}
										render={({ field }) => (
											<FormItem className="grid w-full  items-center gap-1.5 ">
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
														placeholder="Product description"
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
						</div>
						<div className="flex-1 flex-col flex gap-10">
							<FormField
								control={createProductForm.control}
								name="images"
								render={() => (
									<FormItem className="">
										<FormLabel>Product Images</FormLabel>
										<FormControl>
											<div className="relative flex-col gap-4 bg-transparent size-60 sm:size-80 border border-dashed rounded-md flex items-center justify-center border-gray-700 ">
												<div>Upload your product image</div>
												<Input
													type="file"
													accept="image/*"
													multiple
													onChange={handleImgChange}
													className="bg-transparent border-gray-700 cursor-pointer top-0 left-0 absolute size-full opacity-0"
												/>
												<IoIosAddCircleOutline size={40} />
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-4 gap-4">
								{images.map((field, index) => (
									<div key={field.id} className="flex flex-col gap-2">
										<MdDelete
											size={20}
											className="cursor-pointer duration-200 hover:text-red-600"
											onClick={() => removeImg(index)}
										/>
										<img
											src={`data: ${field.mime_type};base64,${field.content} `}
											className="size-32 object-cover p-2 border border-dashed border-gray-700 rounded-md"
											alt="product img"
										/>
									</div>
								))}
							</div>
						</div>
					</div>

					<MainButton
						disabled={isCreatingProduct}
						title={`${
							isCreatingProduct ? "Creating product..." : "Create product"
						}`}
					/>
				</form>
			</Form>
		</div>
	);
};
