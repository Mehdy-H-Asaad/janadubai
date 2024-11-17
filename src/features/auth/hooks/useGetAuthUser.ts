import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAuthUserService } from "../services/get-auth-user.service";

export const useGetAuthUser = () => {
	const storedUserRole = localStorage.getItem("userRole");
	const isAdmin = storedUserRole === "admin";
	const { data: authUser } = useCustomQuery(["authUser"], getAuthUserService, {
		queryKey: ["authUser"],
		enabled: !isAdmin,
	});

	// const isAdmin = authUser?.role.toLowerCase() === "admin";

	if (authUser?.role && authUser.role.toLowerCase() !== storedUserRole) {
		localStorage.setItem("userRole", authUser.role.toLowerCase());
	}

	return { authUser, isAdmin };
};
