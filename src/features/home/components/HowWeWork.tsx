import MainTitle from "@/components/MainTitle";
import { HOW_WE_WORK_DATA } from "../data";

export const HowWeWork = () => {
	return (
		<section className="py-20 bg-primary-black">
			<MainTitle
				heading="HOW WE WORK"
				subHeading="Proven Process for the best result."
			/>

			<div className="container">
				<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16">
					{HOW_WE_WORK_DATA.map(item => {
						return (
							<div className="text-white border-[3px] border-[#ffffff26] relative p-5">
								<h5 className="absolute text-golden -top-5 font-bold text-4xl left-1/2 -translate-x-1/2">
									0{item.id}.
								</h5>
								<h1 className="text-center text-2xl font-[600] my-4">
									{item.heading}
								</h1>
								<p className="text-center text-primary-grey">
									{item.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
