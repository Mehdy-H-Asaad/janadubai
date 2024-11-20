import { axiosClient } from "@/api/axiosClient";
import { TSignUpDTO } from "../types";
import { TUserDTO } from "@/features/user/types";

export const signup = async (signUpData: TSignUpDTO) => {
	try {
		const { data }: { data: TUserDTO } = await axiosClient.post(
			"/auth/signup/",
			signUpData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
