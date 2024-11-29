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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
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
import { useUpdateProductForm } from "@/features/product/schema/update-product.schema";
import { arrayBufferToBase64 } from "@/utils/arrayBufferToBase64";
import { useEffect, ChangeEvent } from "react";
import { TProductDTO } from "@/features/product/types";

export const UpdateProductDialog = (product: TProductDTO) => {
	const {
		addNewDescription,
		addNewImg,
		updateProductForm,
		description,
		images,
		onUpdateProduct,
		removeDescription,
		removeImg,
	} = useUpdateProductForm();

	useEffect(() => {
		if (product) {
			updateProductForm.reset({
				...product,
				category_id: product.category_id.toString(),
			});
		}
	}, []);

	const { categories } = useGetCategories({ type: "products" });

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
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full bg-transparent duration-200 my-1 text-black hover:bg-black hover:text-white">
					Edit Product
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[900px] h-[600px] bg-black border border-gray-700 text-white">
				<DialogHeader>
					<DialogTitle>Update Product</DialogTitle>
					<DialogDescription>
						Make changes to your product here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<ScrollArea className="h-[400px]">
					<div className="grid gap-10 py-4 px-1 ">
						<Form {...updateProductForm}>
							<form
								onSubmit={updateProductForm.handleSubmit(values =>
									onUpdateProduct(values, product.id)
								)}
								className="flex flex-col gap-5"
							>
								<FormField
									control={updateProductForm.control}
									name="name"
									render={({ field }) => (
										<FormItem className="grid w-full max-w-sm items-center gap-1.5">
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
									control={updateProductForm.control}
									name="category_id"
									render={({ field }) => (
										<FormItem className="grid w-full max-w-sm items-center gap-1.5 ">
											<FormLabel>Category</FormLabel>
											<FormControl>
												<Select
													value={field.value} // Binds the value to the form's state
													onValueChange={value => {
														field.onChange(value); // Updates the form field with the selected value
													}}
												>
													<SelectTrigger className="w-[180px] bg-transparent text-white border-gray-700">
														<SelectValue>
															{categories?.find(
																cat => cat.id.toString() === field.value
															)?.name || "Select a category"}
														</SelectValue>
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															<SelectLabel>Categories</SelectLabel>
															{categories
																?.filter(cat => cat.type === "products")
																.map(category => (
																	<SelectItem
																		key={category.id}
																		value={category.id.toString()} // Ensure `value` is a string
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
											control={updateProductForm.control}
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
								<div className="flex-1 flex-col flex gap-10">
									<FormField
										control={updateProductForm.control}
										name="images"
										render={() => (
											<FormItem>
												<FormLabel>Product Images</FormLabel>
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
										{images.map((field, index) => (
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
								<MainButton title="Update product" />
							</form>
						</Form>
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};
