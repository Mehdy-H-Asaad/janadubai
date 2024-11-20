import { useCustomMutation } from "@/hooks/useCustomMutation";
import { resetPasswordService } from "../index";

export const useResetPassword = () => {
	const { mutate: resetPassword } = useCustomMutation(resetPasswordService, [
		"reset-password",
	]);

	return { resetPassword };
};
