import { useCustomMutation } from "@/hooks/useCustomMutation";
import { login } from "../index";
import { useAuthStore } from "../index";
import { useEffect } from "react";
export const useLogin = () => {
	const { setAuthUser, authUser } = useAuthStore();
	const {
		mutate: signIn,
		data,
		isPending: isLoginPending,
	} = useCustomMutation(
		login,
		["users", authUser],
		"/",
		"Logged in Successfully"
	);

	useEffect(() => {
		if (data) setAuthUser(data);
	}, [data]);

	return { isLoginPending, data, signIn };
};
