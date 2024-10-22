import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export const useContactForm = () => {
	const validationSchema = z.object({
		fullName: z.string().min(1, "Full name is required"),
		email: z.string().min(1, "Email is required").email("Invalid email"),
		phone: z.string().min(1, "Phone is required"),
		company: z.string().min(1, "Company name is required"),
		message: z.string().min(1, "Message is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<z.infer<typeof validationSchema>>({
		resolver: zodResolver(validationSchema),
	});

	const onSumbit = (data: z.infer<typeof validationSchema>) => {
		console.log(data);
	};

	const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
		let { value } = e.currentTarget;
		value = value.replace(/\D/g, "");
		setValue("phone", value);
	};
	return { register, handleSubmit, errors, onSumbit, handlePhoneInput };
};
