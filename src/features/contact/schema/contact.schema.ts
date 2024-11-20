import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().optional(),
	email: z.string().min(1, "Email is required").email("Invalid email"),
	phone: z.string().optional(),
	company: z.string().optional(),
	message: z.string().min(1, "Message is required"),
});
