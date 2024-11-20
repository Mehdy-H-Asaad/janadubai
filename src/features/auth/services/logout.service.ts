import { axiosClient } from "@/api/axiosClient";

export const logout = async () => {
	try {
		const { data } = await axiosClient.post("/auth/logout/");

		localStorage.removeItem("userRole");
		localStorage.removeItem("token");

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
