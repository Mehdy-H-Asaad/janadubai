import { axiosClient } from "@/api/axiosClient";
import { TProductDTO } from "../types";

type TGetProductsServiceParams = {
	limit?: number;
	page?: number;
	categoryId?: number | null;
	selectedCategoryId?: number | null;
};

export const getProductsService = async ({
	limit = 10,
	page = 1,
	categoryId,
	selectedCategoryId,
}: TGetProductsServiceParams) => {
	try {
		const queryParameters = new URLSearchParams();

		queryParameters.append("limit", limit.toString());
		queryParameters.append("page", page.toString());
		if (selectedCategoryId) {
			queryParameters.append("categoryId", selectedCategoryId.toString());
		} else if (categoryId) {
			queryParameters.append("categoryId", categoryId.toString());
		}
		const { data }: { data: TProductDTO[] } = await axiosClient.get(
			`/products/get-products/?${queryParameters.toString()}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
