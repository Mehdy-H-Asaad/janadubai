import { axiosClient } from "@/api/axiosClient";

export const deleteProductService = async (productId: string) => {
	try {
		const { data } = await axiosClient.delete(
			`/products/delete-product/${productId}`
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};