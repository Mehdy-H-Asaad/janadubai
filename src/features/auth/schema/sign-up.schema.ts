import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useSignUpSchema = () => {
	const signupFormSchema = z.object({
		username: z.string().min(1, "Email is required"),
		password: z.string().min(1, "Password is required"),
	});

	const form = useForm<z.infer<typeof signupFormSchema>>({
		resolver: zodResolver(signupFormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	return { signupFormSchema, form };
};
