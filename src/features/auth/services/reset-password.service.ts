import { axiosClient } from "@/api/axiosClient";
import toast from "react-hot-toast";

export const resetPasswordService = async (resetData: any) => {
	try {
		const { data } = await axiosClient.post("/auth/reset-password/", resetData);

		return toast.success(data.message);
	} catch (error: any) {
		throw new Error("Link has been expired.");
	}
};
