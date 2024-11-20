import { axiosClient } from "@/api/axiosClient";
import { TUserDTO } from "../types";

export const getUsersService = async () => {
	try {
		const { data }: { data: TUserDTO[] } = await axiosClient.get(
			"/users/get-users/"
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
