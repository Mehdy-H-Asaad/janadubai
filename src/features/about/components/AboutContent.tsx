import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import firstAboutImg from "../assets/imgs/auditorium-8-600x350.jpg.webp";
import secondAboutImg from "../assets/imgs/stadiums-multi-purpose-8-600x350.jpg.webp";
import MainTitle from "@/components/MainTitle";
export const AboutContent = () => {
	return (
		<section className="bg-black">
			<div className="container ">
				<div className="flex items-center h-[calc(100vh-96px)] relative">
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						exit={{ opacity: 0, x: -80 }}
						key="aboutPage"
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
								to={"/products"}
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
				<div className="flex flex-col md:flex-row gap-28 items-center">
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<MainTitle
							heading="INFORMATION ABOUT US"
							subHeading="Our Vision"
							headingClassName="!text-left"
							subHeadingClassName="!text-left"
						/>
						<p className="text-white">
							Our vision is to create professional, creative solutions and make
							a difference with our outstanding designs with a high customer
							satisfaction rate. We strive to be the best in our profession.
						</p>
					</motion.div>

					<motion.img
						initial={{ opacity: 0, x: 80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="rounded-md"
						src={firstAboutImg}
						alt=""
						viewport={{ once: true }}
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-28 pt-40 pb-32 items-center">
					<motion.img
						initial={{ opacity: 0, x: -80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="rounded-md"
						src={secondAboutImg}
						alt=""
						viewport={{ once: true }}
					/>
					<motion.div
						initial={{ opacity: 0, x: 80 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<MainTitle
							heading="INFORMATION ABOUT US"
							subHeading="Our Mission"
							headingClassName="!text-left"
							subHeadingClassName="!text-left"
						/>
						<p className="text-white">
							Our Mission is to be recognized as a preeminent global Furniture
							company that provides the best quality and service. We are
							creating a difference!
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
