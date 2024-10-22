import { useCustomMutation } from "@/hooks/useCustomMutation";
import { login } from "../services/login.service";
export const useLogin = () => {
	const {
		mutate: signIn,
		data,
		isPending: isLoginPending,
	} = useCustomMutation(login, ["users"]);

	return { isLoginPending, data, signIn };
};
