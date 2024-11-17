import { z } from "zod";

export const productSchema = z.object({
	name: z.string().min(1, "Product Name is required"),
	category_id: z.string().min(1, "Category is required"),
	images: z
		.array(
			z.object({
				content: z.string(),
				mime_type: z.string(),
			})
		)
		.min(1, "Product image is required"),

	description: z.array(z.string().min(1, "Description is required")),
});
