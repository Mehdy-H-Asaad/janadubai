import { axiosClient } from "@/api/axiosClient";
import { TUserDTO } from "@/features/user/types";

export const getAuthUserService = async () => {
	try {
		const { data }: { data: TUserDTO } = await axiosClient.get(
			`/auth/get-current-user/`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
