import { useCustomMutation } from "@/hooks/useCustomMutation";
import { signup } from "../services/signup.service";

export const useSignup = () => {
	const { mutate: signUp } = useCustomMutation(signup, ["users"]);

	return { signUp };
};
