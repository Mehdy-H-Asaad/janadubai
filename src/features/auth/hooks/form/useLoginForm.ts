import { z } from "zod";
import { useLoginSchema } from "../../index";
import { useLogin } from "../../index";

export const useLoginForm = () => {
	const { isLoginPending, signIn } = useLogin();

	const { form, loginFormSchema } = useLoginSchema();

	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		signIn(values);
	}
	return { isLoginPending, onSubmit, form };
};
