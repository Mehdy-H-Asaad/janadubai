import { z } from "zod";
import { useSignup } from "../../index";
import { useSignUpSchema } from "../../index";

export const useSignUpForm = () => {
	const { signUp } = useSignup();
	const { form, signupFormSchema } = useSignUpSchema();
	const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
		signUp(values);
	};

	return { form, onSubmit };
};
