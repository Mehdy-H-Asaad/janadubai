export type TProductDTO = {
	id: string;
	name: string;
	category_id: string;
	category_name: string;
	images: {
		mime_type: string;
		content: string;
	}[];
	description: string[];
};

export type TUpdateProductDTO = Omit<TProductDTO, "images" | "category_name">;
export type TCreateProductDTO = Omit<TProductDTO, "id" | "category_name">;
