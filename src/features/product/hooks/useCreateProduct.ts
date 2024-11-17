import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createProductService } from "../index";

export const useCreateProduct = () => {
	const { mutate: createProduct } = useCustomMutation(createProductService, [
		"products",
	]);

	return { createProduct };
};
