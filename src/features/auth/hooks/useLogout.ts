import { useCustomMutation } from "@/hooks/useCustomMutation";
import { logout, useAuthStore } from "../index";

export const useLogout = () => {
	const { authUser } = useAuthStore();
	const { mutate: signOut, isPending: isPendingSignOut } = useCustomMutation(
		logout,
		["users", authUser],
		"Logged out successfully"
	);

	return { signOut, isPendingSignOut };
};
