export type TLoginDTO = {
	username: string;
	password: string;
};

export type TLoginResponseDTO = {
	id: number;
	token: string;
	token_type: string;
	username: string;
	phone: string;
	role: string;
	created_at: Date;
};

export type TSignUpDTO = TLoginDTO;

export type TForgotPasswordDTO = {
	email: string;
};
