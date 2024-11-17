import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getSingleProductService } from "../index";

export const useGetSingleProduct = (productId: number) => {
	const { data: singleProductData, isLoading: isLoadingSingleProductData } =
		useCustomQuery(["product", productId], () =>
			getSingleProductService(productId)
		);

	return { singleProductData, isLoadingSingleProductData };
};
