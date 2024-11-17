import { axiosClient } from "@/api/axiosClient";
import { TUserDTO } from "../index";

export const getUsersService = async () => {
	try {
		const { data }: { data: TUserDTO[] } = await axiosClient.get(
			"/users/get-users/"
		);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
