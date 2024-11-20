import { z } from "zod";

export const resetPasswordSchema = z.object({
	password: z
		.string()
		.min(1, "New password is required")
		.min(8, "New password must be at least 8 characters"),
});
