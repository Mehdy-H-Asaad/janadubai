import { axiosClient } from "@/api/axiosClient";

export const deleteCategoryService = async (id: number) => {
	try {
		const { data } = await axiosClient.delete(
			`/categories/delete-category/${id}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
