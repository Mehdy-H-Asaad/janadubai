export type TUserDTO = {
	id: string;
	username: string;
	role: string;
	created_at: Date;
};

export type message = Pick<TUserDTO, "id">;
