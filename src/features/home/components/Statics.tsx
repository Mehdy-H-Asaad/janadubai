import MainTitle from "@/components/MainTitle";
import { STATISTICS } from "../index";
import { motion } from "framer-motion";

export const Statics = () => {
	return (
		<section className="bg-primary-black py-20">
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				whileInView={{ opacity: 1, y: -50 }}
				transition={{
					duration: 0.5,
				}}
				viewport={{ once: true }}
			>
				<MainTitle
					heading="Why should you trust our company?"
					subHeading="STATISTICS"
				/>
			</motion.div>
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					whileInView={{ opacity: 1, y: -50 }}
					transition={{
						duration: 0.5,
						delay: 0.1,
					}}
					viewport={{ once: true }}
					className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white  "
				>
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
				</motion.div>
			</div>
		</section>
	);
};
