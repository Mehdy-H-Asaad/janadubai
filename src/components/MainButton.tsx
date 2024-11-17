type TMainButton = {
	title: string;
	type?: "submit" | "reset" | "button" | undefined;
};
export const MainButton = ({ title, type }: TMainButton) => {
	return (
		<button
			type={type}
			className="bg-golden text-black capitalize font-[600] px-4 py-2 text-sm rounded-md cursor-pointer w-fit"
		>
			{title}
		</button>
	);
};
