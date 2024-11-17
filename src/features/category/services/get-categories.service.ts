import { axiosClient } from "@/api/axiosClient";
import { TCategory } from "../index";

export const getCategoriesService = async () => {
	try {
		const { data }: { data: TCategory[] } = await axiosClient.get(
			"/categories/get-categories/"
		);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
