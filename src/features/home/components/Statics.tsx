import MainTitle from "@/components/MainTitle";
import { STATISTICS } from "../data";

export const Statics = () => {
	return (
		<section className="bg-primary-black py-20">
			<MainTitle
				heading="Why should you trust our company?"
				subHeading="STATISTICS"
			/>
			<div className="container">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white  ">
					{STATISTICS.map(item => {
						return (
							<div key={item.id} className="border-[3px] border-[#feda7c] p-2">
								<h2 className="text-5xl font-bold text-center">
									{item.Statistics}
								</h2>
								<span className="text-center mt-5 block text-primary-grey">
									{item.title}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
