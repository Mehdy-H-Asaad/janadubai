import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteCategoryService } from "../index";

export const useDeleteCategory = () => {
	const { mutate: deleteCategory } = useCustomMutation(
		deleteCategoryService,
		["categories"],

		"Deleted category successfully"
	);

	return { deleteCategory };
};
