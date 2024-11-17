import { axiosClient } from "@/api/axiosClient";
import { TLoginDTO, TLoginResponseDTO } from "../types";

export const login = async (loginData: TLoginDTO) => {
	try {
		const { data }: { data: TLoginResponseDTO } = await axiosClient.post(
			"/auth/login",
			loginData
		);

		localStorage.setItem("token", data.token);
		return data;
	} catch (error: any) {
		throw new Error(error.response.detail);
	}
};
