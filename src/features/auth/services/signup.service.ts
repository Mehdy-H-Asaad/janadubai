import { axiosClient } from "@/api/axiosClient";
import { TSignUpDTO } from "../types";

export const signup = async (signUpData: TSignUpDTO) => {
	try {
		const { data } = await axiosClient.post("/auth/signup", signUpData);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
