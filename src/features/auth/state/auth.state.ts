import { TUserDTO } from "@/features/user/types";
import { create } from "zustand";
import { TLoginResponseDTO } from "../types";
type TAuthState = {
	authUser: string | null;
	setAuthUser: (user: TUserDTO | any | null) => void;
	isAdmin: boolean;
	setIsAdmin: (isAdmin: boolean) => void;
	clearAuth: () => void;
};

export const useAuthStore = create<TAuthState>(set => {
	const token = localStorage.getItem("token");
	const role = localStorage.getItem("userRole");

	return {
		authUser: token || null,
		isAdmin: (role || "").toLowerCase() === "admin",
		setAuthUser: (user: TLoginResponseDTO) => {
			localStorage.setItem("userRole", user.role);
			localStorage.setItem("token", user.token);
			set(() => ({
				authUser: user.token,
				isAdmin: user.role.toLowerCase() === "admin",
			}));
		},
		setIsAdmin: isAdmin => set(() => ({ isAdmin })),
		clearAuth: () => {
			set(() => ({ authUser: null, isAdmin: false }));
		},
	};
});
