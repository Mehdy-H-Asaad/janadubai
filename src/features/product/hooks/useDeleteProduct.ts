import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteProductService } from "../index";

export const useDeleteProduct = () => {
	const { mutate: deleteProduct } = useCustomMutation(
		deleteProductService,
		["products"],

		"Deleted product successfully"
	);

	return { deleteProduct };
};
