import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteCategoryService } from "../index";

export const useDeleteCategory = () => {
	const { mutate: deleteCategory } = useCustomMutation(deleteCategoryService, [
		"categories",
	]);

	return { deleteCategory };
};
