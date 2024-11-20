import { axiosClient } from "@/api/axiosClient";
import { TForgotPasswordDTO } from "../types";
import toast from "react-hot-toast";

export const forgotPasswordService = async (email: TForgotPasswordDTO) => {
	try {
		const { data } = await axiosClient.post("/auth/forgot-password/", email);

		return toast.success(data.message);
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
