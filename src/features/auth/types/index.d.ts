export type TLoginDTO = {
	username: string;
	password: string;
};

export type TLoginResponseDTO = {
	token: string;
	username: string;
	role: string;
	created_at: Date;
};

export type TSignUpDTO = TLoginDTO;

export type TForgotPasswordDTO = {
	email: string;
};
