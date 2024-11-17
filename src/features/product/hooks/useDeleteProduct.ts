import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteProductService } from "../index";

export const useDeleteProduct = () => {
	const { mutate: deleteProduct } = useCustomMutation(deleteProductService, [
		"products",
	]);

	return { deleteProduct };
};
