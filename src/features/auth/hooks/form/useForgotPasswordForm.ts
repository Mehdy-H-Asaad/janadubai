import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useForgotPassword } from "../../index";
import { forgotPasswordSchema } from "../../index";

export const useForgotPasswordForm = () => {
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
