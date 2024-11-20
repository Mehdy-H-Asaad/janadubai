import { z } from "zod";

export const loginFormSchema = z.object({
	username: z.string().min(1, "Email is required").email({
		message: "Invalid Email",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters",
	}),
});
