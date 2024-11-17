import { useForm } from "react-hook-form";
import { categorySchema } from "../index";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateCategory } from "../index";

export const useCreateCategorySchema = () => {
	const createCategorySchema = categorySchema;

	const createCategoryForm = useForm<z.infer<typeof createCategorySchema>>({
		resolver: zodResolver(categorySchema),
		defaultValues: {
			name: "",
			type: "",
		},
	});

	const { createCategory } = useCreateCategory();

	const onCreateCategory = (values: z.infer<typeof categorySchema>) => {
		createCategory(values);
	};

	return { createCategoryForm, createCategorySchema, onCreateCategory };
};
