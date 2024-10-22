import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type TFormSchema = {
	fullName: string;
	email: string;
	phone: string;
	company: string;
	message: string;
};

export type TContactForm = {
	label: string;
	error: FieldError | undefined;
	name: keyof TFormSchema;
	register: UseFormRegister<TFormSchema>;
} & InputHTMLAttributes<HTMLInputElement>;
