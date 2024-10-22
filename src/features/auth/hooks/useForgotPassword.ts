import { useCustomMutation } from "@/hooks/useCustomMutation";
import { forgotPasswordService } from "../services/forgotPassword.service";

export const useForgotPassword = () => {
	const { mutate: forgotPassword } = useCustomMutation(forgotPasswordService, [
		"users",
	]);

	return { forgotPassword };
};
