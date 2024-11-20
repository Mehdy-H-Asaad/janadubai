import { axiosClient } from "@/api/axiosClient";
import { TProductDTO, TUpdateProductDTO } from "../types";

export const updateProductService = async (productData: TUpdateProductDTO) => {
	try {
		const { data }: { data: TProductDTO } = await axiosClient.put(
			`/products/update-product/${productData.id}`,
			productData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
