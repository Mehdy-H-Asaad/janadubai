import { Link } from "react-router-dom";
import Logo from "../../public/imgs/Logo2.png.webp";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navLinks } from "@/shared/constants";
import { useLogout } from "@/features/auth/hooks/useLogout";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const { signOut } = useLogout();

	return (
		<nav className="bg-primary-black h-24 flex items-center">
			<div className="container flex items-center justify-between">
				<img src={Logo} className="w-52 object-contain" alt="" />

				<div className="hidden lg:flex gap-5 items-center">
					{navLinks.map(ele => {
						return (
							<Link
								key={ele.path}
								className="uppercase text-white font-[500] text-sm"
								to={ele.path}
							>
								{ele.path === "/cart" ? (
									<div className="relative">
										<BsCart3 size={24} />
										<span className="absolute -top-[10px] -right-[9px] bg-golden rounded-[50%] size-5 flex items-center justify-center text-black font-bold">
											5
										</span>
									</div>
								) : ele.path === "/favorite" ? (
									<div>
										<div className="relative">
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
					<div
						className="uppercase text-white font-[500] text-sm cursor-pointer"
						onClick={signOut}
					>
						Logout
					</div>
				</div>
				<IoIosMenu
					onClick={() => setIsVisible(!isVisible)}
					className="block lg:hidden text-white cursor-pointer"
					size={30}
				/>
			</div>

			<ResponsiveNavbar isVisible={isVisible} setIsVisible={setIsVisible} />
		</nav>
	);
};

export default Navbar;
