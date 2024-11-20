import { z } from "zod";

export const signupFormSchema = z.object({
	username: z.string().min(1, "Email is required"),
	password: z.string().min(1, "Password is required"),
});
