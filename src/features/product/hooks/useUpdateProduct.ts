import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateProductService } from "../index";

export const useUpdateProduct = () => {
	const { mutate: updateProduct } = useCustomMutation(
		updateProductService,
		["products"],
		"Updated product successfully"
	);

	return { updateProduct };
};
