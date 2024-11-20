import MainTitle from "@/components/MainTitle";
import { motion } from "framer-motion";
import { OUR_CLIENTS } from "../index";
export const OurClientsContent = () => {
	const staggerVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2 * index,
			},
		}),
	};

	return (
		<section className="bg-primary-black py-32">
			<div className="container">
				<MainTitle
					heading="OUR CLIENTS"
					subHeading="From small businesses to the government"
				/>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
					{OUR_CLIENTS.map(item => {
						return (
							<motion.div
								variants={staggerVariants}
								initial="initial"
								custom={item.id}
								animate="animate"
								key={item.id}
								viewport={{ once: true }}
								className="flex items-center justify-center border-2 border-secondary-grey py-3 px-5"
							>
								<span className="text-primary-grey font-[500] text-sm">
									{item.title}
								</span>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
