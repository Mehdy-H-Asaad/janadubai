import React from "react";
import { ButtonProps } from "./ui/button";

type TMainButton = {
	title: string;
	type?: "submit" | "reset" | "button" | undefined;
};

export const MainButton = React.forwardRef<
	HTMLButtonElement,
	TMainButton & ButtonProps
>(({ title, type, ...props }, ref) => {
	return (
		<button
			ref={ref}
			type={type}
			className="bg-golden text-black capitalize font-[600] px-4 py-2 text-sm rounded-md cursor-pointer w-fit"
			{...props}
		>
			{title}
		</button>
	);
});

MainButton.displayName = "MainButton";
