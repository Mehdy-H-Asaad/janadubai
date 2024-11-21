import { axiosClient } from "@/api/axiosClient";
import { TProductDTO } from "@/features/product/types";

type TSearchProductsService = {
	name: string;
	categoryId?: number;
};

export const searchProductsService = async ({
	name,
	categoryId,
}: TSearchProductsService) => {
	try {
		let params = `?name=${name}`;
		if (categoryId) params += `&categoryId=${categoryId.toString()}`;
		const { data }: { data: TProductDTO[] } = await axiosClient.get(
			`/products/search-products/${params}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
