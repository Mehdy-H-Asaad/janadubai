export type TCategory = {
	name: string;
	type: string;
	id: number;
};
export type TCreateCategoryDTO = Omit<TCategory, "id">;
