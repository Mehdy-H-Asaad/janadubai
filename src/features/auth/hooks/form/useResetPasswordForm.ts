import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { resetPasswordSchema } from "../../index";
import { useResetPassword } from "../../index";

export const useResetPasswordForm = (token: string | null) => {
	const resetPasswordForm = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	const { resetPassword } = useResetPassword();

	const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
		resetPassword({ ...values, token });
	};

	return { onSubmit, resetPasswordForm };
};
