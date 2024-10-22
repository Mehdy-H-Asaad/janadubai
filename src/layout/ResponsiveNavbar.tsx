import { navLinks } from "@/shared/constants";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({
	isVisible,
	setIsVisible,
}: {
	isVisible: boolean;
	setIsVisible: (item: boolean) => void;
}) => {
	return (
		<div
			className={`flex transition-all duration-500 gap-9 p-10 h-screen fixed flex-col top-0 ${
				isVisible ? " left-0" : "-left-[150%]"
			} z-20 bg-black w-[350px]`}
		>
			<div className="flex items-center justify-between">
				<h1 className="text-white text-3xl font-bold">Navbar</h1>
				<IoClose
					size={30}
					className="text-white cursor-pointer"
					onClick={() => setIsVisible(false)}
				/>
			</div>
			{navLinks.map(ele => {
				return (
					<Link
						key={ele.path}
						className="uppercase text-white font-[500] text-sm"
						to={ele.path}
					>
						{ele.path === "/cart" ? (
							<div className="relative w-fit">
								<BsCart3 size={24} />
								<span className="absolute -top-[10px] -right-[9px] bg-golden rounded-[50%] size-5 flex items-center justify-center text-black font-bold">
									5
								</span>
							</div>
						) : ele.path === "/favorite" ? (
							<div>
								<div className="relative w-fit">
									<IoMdHeartEmpty size={24} />
									<span className="absolute -top-[10px] -right-[9px] bg-golden rounded-[50%] size-5 flex items-center justify-center text-black font-bold">
										5
									</span>
								</div>
							</div>
						) : (
							ele.title
						)}
					</Link>
				);
			})}
		</div>
	);
};

export default ResponsiveNavbar;
