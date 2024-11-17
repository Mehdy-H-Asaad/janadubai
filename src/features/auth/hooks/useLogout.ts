import { useCustomMutation } from "@/hooks/useCustomMutation";
import { logout } from "../index";

export const useLogout = () => {
	const { mutate: signOut } = useCustomMutation(
		logout,
		["users"],
		"",
		"Logged out successfully"
	);

	return { signOut };
};
