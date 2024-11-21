import MainTitle from "@/components/MainTitle";
import { OUR_ADVANTAGES_DATA } from "../index";
import { motion } from "framer-motion";

export const OurAdvantages = () => {
	return (
		<section className="py-20 bg-black overflow-x-hidden">
			<div className="container">
				<div className="flex items-center gap-14 flex-col lg:flex-row lg:gap-9 ">
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 1,
						}}
						viewport={{ once: true }}
					>
						<MainTitle
							heading="Our advantages"
							subHeading="Why do people trust our company?"
							headingClassName="!text-left"
							subHeadingClassName="!text-left"
						/>
						<p className="text-white">
							We will be happy to take on implementing a project of any
							complexity. We guarantee the quality of our work and have many
							years of experience.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 1,
						}}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 gap-10"
					>
						{OUR_ADVANTAGES_DATA.map(item => {
							return (
								<div
									key={item.id}
									className="text-white border-[3px] border-[#ffffff26] relative p-5"
								>
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
					</motion.div>
				</div>
			</div>
		</section>
	);
};
