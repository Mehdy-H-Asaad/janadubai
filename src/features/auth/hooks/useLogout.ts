import { useCustomMutation } from "@/hooks/useCustomMutation";
import { logout } from "../services/logout.service";

export const useLogout = () => {
	const { mutate: signOut } = useCustomMutation(logout, ["users"]);

	return { signOut };
};
