import { useCustomQuery } from "@/hooks/useCustomQuery";
import { searchProductsService } from "../index";

type TUseSearchProducts = {
	name: string;
	categoryId?: number;
};

export const useSearchProducts = ({ name, categoryId }: TUseSearchProducts) => {
	const { data: filteredProducts, isLoading: isLoadingfilteredProducts } =
		useCustomQuery(
			["searchProducts", name, categoryId],
			() => searchProductsService({ name, categoryId }),
			{
				queryKey: ["searchProducts", name, categoryId],
				enabled: !!name,
			}
		);

	return { filteredProducts, isLoadingfilteredProducts };
};
