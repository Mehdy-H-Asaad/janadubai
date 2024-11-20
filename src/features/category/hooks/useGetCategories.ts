import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getCategoriesService } from "../index";

type TUseGetCategories = {
	type?: string;
};

export const useGetCategories = ({ type }: TUseGetCategories) => {
	const { data: categories, isLoading: isLoadingCategories } = useCustomQuery(
		["categories", type],
		() => getCategoriesService({ type })
	);

	return { categories, isLoadingCategories };
};
