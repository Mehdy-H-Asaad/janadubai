export type TProjectDTO = {
	name: string;
	category_id: string;
	id: number;
	category_name: string;
	description: string[];
	images: {
		mime_type: string;
		content: string;
	}[];
};

export type TUpdateProjectDTO = Omit<TProjectDTO, "category_name">;
export type TCreateProjectDTO = Omit<TProjectDTO, "id" | "category_name">;
