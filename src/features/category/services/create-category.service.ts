import { axiosClient } from "@/api/axiosClient";
import { TCreateCategoryDTO } from "../index";

export const createCategoryService = async (
	categoryData: TCreateCategoryDTO
) => {
	try {
		const { data }: { data: TCreateCategoryDTO } = await axiosClient.post(
			"/categories/create-category",
			categoryData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};