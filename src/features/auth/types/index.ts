export type TLoginDTO = {
	username: string;
	password: string;
};

export type TLoginResponseDTO = {
	token: string;
};

export type TSignUpDTO = TLoginDTO;

export type TForgotPasswordDTO = {
	email: string;
};
