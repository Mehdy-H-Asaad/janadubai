import { useCustomMutation } from "@/hooks/useCustomMutation";
import { login } from "../index";
export const useLogin = () => {
	const {
		mutate: signIn,
		data,
		isPending: isLoginPending,
	} = useCustomMutation(login, ["users"], "/", "Logged in Successfully");

	return { isLoginPending, data, signIn };
};
