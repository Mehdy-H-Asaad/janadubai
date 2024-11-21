import { useCustomMutation } from "@/hooks/useCustomMutation";
import { login } from "../index";
import { useAuthStore } from "../state/auth.state";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
	const { setAuthUser, authUser } = useAuthStore();
	const navigate = useNavigate();
	const {
		mutate: signIn,
		data: loginData,
		isPending: isLoginPending,
	} = useCustomMutation(login, ["users", authUser], "Logged in Successfully");

	useEffect(() => {
		if (loginData) {
			setAuthUser(loginData);
			navigate("/", { replace: true });
		}
	}, [loginData]);

	return { isLoginPending, signIn, loginData };
};
