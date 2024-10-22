import { axiosClient } from "@/api/axiosClient";
import { TForgotPasswordDTO } from "../types";

export const forgotPasswordService = async (email: TForgotPasswordDTO) => {
	try {
		const { data } = await axiosClient.post("/auth/forgot-password", email);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
