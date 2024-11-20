import { useCustomMutation } from "@/hooks/useCustomMutation";
import { signup } from "../index";

export const useSignup = () => {
	const { mutate: signUp, isPending: isSigning } = useCustomMutation(
		signup,
		["users"],
		"/",
		"Welcome!"
	);

	return { signUp, isSigning };
};
