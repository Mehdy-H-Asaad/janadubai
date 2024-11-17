import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getCategoriesService } from "../index";

export const useGetCategories = () => {
	const { data: categories, isLoading: isLoadingCategories } = useCustomQuery(
		["categories"],
		getCategoriesService
	);

	return { categories, isLoadingCategories };
};
