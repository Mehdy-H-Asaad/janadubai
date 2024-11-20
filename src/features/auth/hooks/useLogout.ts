import { useCustomMutation } from "@/hooks/useCustomMutation";
import { logout } from "../index";

export const useLogout = () => {
	const { mutate: signOut, isPending: isPendingSignOut } = useCustomMutation(
		logout,
		["authUser"],
		"/",
		"Logged out successfully"
	);

	return { signOut, isPendingSignOut };
};
