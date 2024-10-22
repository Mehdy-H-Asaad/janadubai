type MainTitleProps = {
	heading: string;
	subHeading: string;
	headingClassName?: string;
	subHeadingClassName?: string;
};
const MainTitle = ({
	heading,
	subHeading,
	headingClassName = "",
	subHeadingClassName = "",
}: MainTitleProps) => {
	return (
		<div className="mb-14">
			<h5 className={` text-primary-grey text-center ${headingClassName}  `}>
				{heading}
			</h5>
			<h3
				className={` text-golden text-center text-4xl mt-3 font-bold ${subHeadingClassName} `}
			>
				{subHeading}
			</h3>
		</div>
	);
};

export default MainTitle;
