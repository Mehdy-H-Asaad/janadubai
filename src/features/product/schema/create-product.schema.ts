import { useFieldArray, useForm } from "react-hook-form";
import { productSchema } from "../index";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateProduct } from "../index";

export const useCreateProdcutForm = () => {
	const { createProduct, isCreatingProduct } = useCreateProduct();

	const createProductSchema = productSchema;

	const createProductForm = useForm<z.infer<typeof createProductSchema>>({
		resolver: zodResolver(createProductSchema),
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
		control: createProductForm.control,
		name: "images",
	});

	const description = createProductForm.watch("description");

	const addNewDescription = () => {
		const currentDescriptions = createProductForm.getValues("description");
		createProductForm.setValue("description", [...currentDescriptions, ""]);
	};

	const removeDescription = (index: number) => {
		const currentDescriptions = createProductForm.getValues("description");
		createProductForm.setValue(
			"description",
			currentDescriptions.filter((_, i) => i !== index)
		);
	};

	const onCreateProduct = (values: z.infer<typeof createProductSchema>) => {
		createProduct(values);
	};

	return {
		addNewDescription,
		addNewImg,
		createProductForm,
		createProductSchema,
		description,
		images,
		onCreateProduct,
		removeDescription,
		removeImg,
		isCreatingProduct,
	};
};
