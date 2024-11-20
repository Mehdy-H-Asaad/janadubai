import { axiosClient } from "@/api/axiosClient";
import { TCreateProductDTO, TProductDTO } from "../types";

export const createProductService = async (productData: TCreateProductDTO) => {
	try {
		const { data }: { data: TProductDTO } = await axiosClient.post(
			"/products/create-product/",
			productData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
