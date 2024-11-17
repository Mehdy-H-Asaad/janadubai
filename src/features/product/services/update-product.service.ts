import { axiosClient } from "@/api/axiosClient";
import { TUpdateProductDTO } from "../types";

export const updateProductService = async (productData: TUpdateProductDTO) => {
	try {
		const { data } = await axiosClient.put(
			`/products/update-product/${productData.id}`,
			productData
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};
