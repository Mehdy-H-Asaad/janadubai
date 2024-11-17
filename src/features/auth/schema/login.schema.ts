import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useLoginSchema = () => {
	const loginFormSchema = z.object({
		username: z.string().min(1, "Email is required").email({
			message: "Invalid Email",
		}),
		password: z.string().min(8, {
			message: "Password must be at least 8 characters",
		}),
	});

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	return { form, loginFormSchema };
};
