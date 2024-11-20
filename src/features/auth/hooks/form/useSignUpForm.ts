import { z } from "zod";
import { signupFormSchema, useSignup } from "../../index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useSignUpForm = () => {
	const { signUp, isSigning } = useSignup();

	const signupForm = useForm<z.infer<typeof signupFormSchema>>({
		resolver: zodResolver(signupFormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
		signUp(values);
	};

	return { signupForm, onSubmit, isSigning };
};
