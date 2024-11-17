import { z } from "zod";

export const categorySchema = z.object({
	name: z.string().min(1, "Category name is required"),
	type: z.string().min(1, "Category type is required"),
});
