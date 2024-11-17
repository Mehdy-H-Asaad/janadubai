import { useFieldArray, useForm } from "react-hook-form";
import { productSchema } from "./product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

export const useUpdateProductForm = () => {
	const { updateProduct } = useUpdateProduct();

	const updateProductSchema = productSchema;

	const updateProductForm = useForm<z.infer<typeof updateProductSchema>>({
		resolver: zodResolver(updateProductSchema),
		defaultValues: {
			images: [],
			name: "",
			category_id: "",
			description: [""],
		},
	});

	const {
		fields: images,
		append: addNewImg,
		remove: removeImg,
	} = useFieldArray({
		control: updateProductForm.control,
		name: "images",
	});

	const description = updateProductForm.watch("description");

	const addNewDescription = () => {
		const currentDescriptions = updateProductForm.getValues("description");
		updateProductForm.setValue("description", [...currentDescriptions, ""]);
	};

	const removeDescription = (index: number) => {
		const currentDescriptions = updateProductForm.getValues("description");
		updateProductForm.setValue(
			"description",
			currentDescriptions.filter((_, i) => i !== index)
		);
	};

	const onUpdateProduct = (
		values: z.infer<typeof updateProductSchema>,
		productId: string
	) => {
		updateProduct({ ...values, id: productId });
	};

	return {
		addNewDescription,
		addNewImg,
		updateProductForm,
		updateProductSchema,
		description,
		images,
		onUpdateProduct,
		removeDescription,
		removeImg,
	};
};
