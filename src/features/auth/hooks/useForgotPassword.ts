import { useCustomMutation } from "@/hooks/useCustomMutation";
import { forgotPasswordService } from "../index";

export const useForgotPassword = () => {
	const { mutate: forgotPassword } = useCustomMutation(forgotPasswordService, [
		"users",
	]);

	return { forgotPassword };
};
