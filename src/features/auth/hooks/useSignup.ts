import { useCustomMutation } from "@/hooks/useCustomMutation";
import { signup } from "../index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useSignup = () => {
	const navigate = useNavigate();
	const {
		data,
		mutate: signUp,
		isPending: isSigning,
	} = useCustomMutation(signup, ["users"], "Welcome!");

	useEffect(() => {
		if (data) {
			navigate("/", { replace: true });
		}
	}, [data]);

	return { signUp, isSigning };
};
