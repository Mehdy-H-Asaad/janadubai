import { z } from "zod";
import { loginFormSchema, useLogin } from "../../index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
	const { isLoginPending, signIn } = useLogin();

	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		signIn(values);
	}
	return { isLoginPending, onSubmit, loginForm };
};
