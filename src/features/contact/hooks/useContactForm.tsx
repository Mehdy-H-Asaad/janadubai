import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateQuestion } from "@/features/questions/hooks/useCreateQuestion";
import { contactSchema } from "../index";

export const useContactForm = () => {
	const { createQuestion } = useCreateQuestion();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
	});

	const onSumbit = (data: z.infer<typeof contactSchema>) => {
		createQuestion(data);
	};

	const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
		let { value } = e.currentTarget;
		value = value.replace(/\D/g, "");
		setValue("phone", value);
	};
	return { register, handleSubmit, errors, onSumbit, handlePhoneInput };
};
