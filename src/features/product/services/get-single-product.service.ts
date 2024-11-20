import { axiosClient } from "@/api/axiosClient";
import { TProductDTO } from "../types";

export const getSingleProductService = async (id: number) => {
	try {
		const { data }: { data: TProductDTO } = await axiosClient.get(
			`/products/get-products/${id}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
