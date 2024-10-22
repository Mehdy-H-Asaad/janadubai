import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<section className="h-[calc(100%-96px)]">
			<div className="relative">
				<div className="hero-bg">
					<span className="absolute top-0 left-0 size-full bg-black opacity-40"></span>
					<div className="container flex items-center h-[calc(100vh-96px)] relative">
						<div className="text-white">
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
