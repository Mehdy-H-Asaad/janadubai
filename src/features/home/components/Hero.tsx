import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { FaCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { SearchFeature } from "@/features/search/components/SearchFeature";

export const Hero = () => {
	const heroBg = ["hero-bg-one", "hero-bg-two"];
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		// Set up the interval
		intervalRef.current = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % heroBg.length);
		}, 3000);

		// Cleanup interval on component unmount
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<section className="h-[calc(100%-96px)]">
			<SearchFeature />

			<div className="relative">
				{/* Updated dynamic background */}
				<div
					className={`absolute inset-0 ${heroBg[currentSlide]} transition-all duration-2000`}
				>
					<span className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></span>
				</div>

				<div className="container flex items-center h-[calc(100vh-96px)] relative z-10">
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						viewport={{ once: true }}
						className="text-white"
					>
						<h5 className="text-[#ffffff99] text-xl">Who are we</h5>
						<h1 className="my-5 font-bold text-2xl md:text-4xl max-w-[900px]">
							<span className="text-golden">JANA DUBAI</span> TR SOLE
							PROPRITORSHIP LLC.
						</h1>
						<p className=" max-w-[800px]">
							JANA DUBAI is a modern trading company specializing in the
							furniture field. We are distinguished by our professional touch,
							high-quality products, and reliable services.
						</p>

						<div className="flex gap-3 mt-14 flex-wrap">
							<Link
								to="/products"
								className="bg-white font-[600] py-3 px-10 text-[14px] text-black w-[145px]"
							>
								Products
							</Link>
							<Link
								to={"/projects"}
								className="bg-golden font-[600] text-[14px] py-3 px-10 text-black w-[145px]"
							>
								Projects
							</Link>
						</div>
					</motion.div>
				</div>

				{/* Carousel Indicators */}
				{/* <div className="flex gap-5 items-center justify-center relative z-20">
					{heroBg.map((_, index) => (
						<FaCircle
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`${
								currentSlide === index ? "text-golden" : "text-white"
							} mb-10 p-[2px] cursor-pointer border border-white rounded-[50%]`}
							size={16}
						/>
					))}
				</div> */}
			</div>
		</section>
	);
};
