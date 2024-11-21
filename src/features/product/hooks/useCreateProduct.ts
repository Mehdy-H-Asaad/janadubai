import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createProductService } from "../index";

export const useCreateProduct = () => {
	const { mutate: createProduct, isPending: isCreatingProduct } =
		useCustomMutation(
			createProductService,
			["products"],

			"Created product successfully"
		);

	return { createProduct, isCreatingProduct };
};
