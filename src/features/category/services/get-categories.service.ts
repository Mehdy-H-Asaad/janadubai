import { axiosClient } from "@/api/axiosClient";
import { TCategory } from "../types/";

type TGetCategoriesService = {
	type?: string;
};

export const getCategoriesService = async ({ type }: TGetCategoriesService) => {
	try {
		const { data }: { data: TCategory[] } = await axiosClient.get(
			`/categories/get-categories/${type ? `?type=${type}` : ""}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
