import { Label } from "@/components/ui/label";
import { TContactForm } from "../types";

export const ContactForm = ({
	error,
	register,
	name,
	label,
	...inputProps
}: TContactForm) => {
	return (
		<div className="flex-1">
			<Label className={`text-sm ${error && "text-red-600"} capitalize`}>
				{label}
			</Label>
			<input
				{...register(name)}
				{...inputProps}
				type="text"
				className={`px-4 bg-transparent outline-none text-white w-full border-[2px] border-secondary-grey h-10`}
				placeholder={`Your ${label}`}
			/>
			{error && (
				<div className=" font-[500] mt-1 text-red-700">{error.message}</div>
			)}
		</div>
	);
};
