export type TQuestionDTO = {
	id: number;
	email: string;
	name?: string;
	phone?: string;
	company?: string;
	message: string;
	answered: boolean;
	created_at: Date;
};

export type TCreateQuestionDTO = Omit<
	TQuestionDTO,
	"answered" | "id" | "created_at"
>;
export type TReplyToQuestionDTO = Pick<TQuestionDTO, "id" | "message">;
