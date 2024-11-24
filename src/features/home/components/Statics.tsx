import MainTitle from "@/components/MainTitle";
import { STATISTICS } from "../index";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Statics = () => {
	const [inView, setInView] = useState(false);
	const staticsRef = useRef<HTMLDivElement | null>(null);
	const [values, setValues] = useState(STATISTICS.map(() => 0));

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
				}
			},
			{ threshold: 0.5 } // Trigger when 50% of the component is visible
		);

		if (staticsRef.current) {
			observer.observe(staticsRef.current);
		}

		return () => {
			if (staticsRef.current) {
				observer.unobserve(staticsRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (inView) {
			STATISTICS.forEach((item, index) => {
				const duration = 2000; // 2 seconds
				const startValue = 0;
				const endValue = item.Statistics;
				const increment = (endValue - startValue) / (duration / 16.67); // Assuming 60fps

				let currentValue = startValue;
				const animate = () => {
					currentValue += increment;
					if (currentValue >= endValue) {
						currentValue = endValue;
					}

					setValues(prevValues => {
						const newValues = [...prevValues];
						newValues[index] = Math.floor(currentValue);
						return newValues;
					});

					if (currentValue < endValue) {
						requestAnimationFrame(animate);
					}
				};

				requestAnimationFrame(animate);
			});
		}
	}, [inView]);

	return (
		<section className="bg-primary-black py-20" ref={staticsRef}>
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
					className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white"
				>
					{STATISTICS.map((item, index) => (
						<div key={item.id} className="border-[3px] border-[#feda7c] p-2">
							<h2 className="text-5xl font-bold text-center">
								{values[index]}
							</h2>
							<span className="text-center mt-5 block text-primary-grey">
								{item.title}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
