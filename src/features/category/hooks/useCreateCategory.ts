import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createCategoryService } from "../index";

export const useCreateCategory = () => {
	const { mutate: createCategory } = useCustomMutation(
		createCategoryService,
		["categories"],
		"Created category successfully"
	);

	return { createCategory };
};
