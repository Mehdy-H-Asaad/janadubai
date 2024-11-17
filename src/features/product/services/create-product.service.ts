import { axiosClient } from "@/api/axiosClient";
import { TCreateProductDTO } from "../types";

export const createProductService = async (productData: TCreateProductDTO) => {
	try {
		const { data } = await axiosClient.post(
			"/products/create-product",
			productData
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
