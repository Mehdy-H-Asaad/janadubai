import { useCustomMutation } from "@/hooks/useCustomMutation";
import { signup } from "../index";

export const useSignup = () => {
	const { mutate: signUp } = useCustomMutation(
		signup,
		["users"],
		"/",
		"Welcome!"
	);

	return { signUp };
};
