import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useForgotPassword } from "../../index";

export const useForgotPasswordForm = () => {
	const forgotPasswordSchema = z.object({
		email: z.string().min(1, "Email is required").email({
			message: "Invalid Email",
		}),
	});

	const form = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const { forgotPassword } = useForgotPassword();

	async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
		forgotPassword(values);
	}
	return { form, onSubmit };
};
