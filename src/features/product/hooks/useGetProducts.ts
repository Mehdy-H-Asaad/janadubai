import { useCustomQuery } from "@/hooks/useCustomQuery";
import { useSearchParams } from "react-router-dom";
import { getProductsService } from "../index";

type TGetProductsOptions = {
	limit?: number;
	page?: number;
	selectedCategoryId?: number;
};

export const useGetProducts = ({
	limit = 10,
	page = 1,
	selectedCategoryId,
}: TGetProductsOptions) => {
	const [searchParams] = useSearchParams();

	const categoryId = Number(searchParams.get("categoryId"));

	const {
		data: products,
		refetch: refetchProducts,
		isLoading: isLoadingProducts,
		isRefetching: isRefetchingProducts,
	} = useCustomQuery(["products", categoryId, page, selectedCategoryId], () =>
		getProductsService({ limit, page, categoryId, selectedCategoryId })
	);

	return { products, refetchProducts, isLoadingProducts, isRefetchingProducts };
};
