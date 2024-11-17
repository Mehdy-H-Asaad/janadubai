import { Link, useLocation } from "react-router-dom";
import Logo from "../../public/imgs/Logo2.png.webp";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navLinks } from "@/shared/constants";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { useEffect, useState } from "react";
import { useGetAuthUser } from "@/features/auth/hooks/useGetAuthUser";

const Navbar = () => {
	const [activeTitle, setActiveTitle] = useState<string>("home");
	const { signOut } = useLogout();
	const { isAdmin, authUser } = useGetAuthUser();
	const location = useLocation();
	useEffect(() => {
		const currentLink = navLinks.find(link => link.path === location.pathname);
		if (!currentLink && location.pathname === "/login") {
			setActiveTitle("");
		}
		console.log(currentLink);

		if (currentLink) {
			setActiveTitle(currentLink.title);
		}
	}, [location.pathname]);

	return (
		<nav className="bg-primary-black h-24 flex items-center">
			<div className="container flex items-center justify-between">
				<img src={Logo} className="w-36 sm:w-52 object-contain" alt="" />

				<div className="hidden xl:flex gap-5 items-center ml-auto">
					{navLinks.map(ele => {
						return (
							<Link
								onClick={() => setActiveTitle(ele.title)}
								key={ele.path}
								className={`uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-[''] ${
									activeTitle.toLowerCase() === ele.title.toLowerCase()
										? "before:w-full text-white"
										: ""
								} ${
									ele.title === "Dashboard" && !isAdmin ? "hidden" : "block"
								}`}
								to={ele.path}
							>
								{ele.title}
							</Link>
						);
					})}
				</div>
				<div className=" ml-auto mr-5 xl:mr-0 xl:ml-5">
					{authUser ? (
						<div
							className="uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']"
							onClick={signOut}
						>
							Logout
						</div>
					) : (
						<Link
							onClick={() => setActiveTitle("login")}
							className={`${
								location.pathname === "/login" ? "before:w-full text-white" : ""
							} uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']`}
							to="/login"
						>
							Login
						</Link>
					)}
				</div>
				<ResponsiveNavbar />
			</div>
		</nav>
	);
};

export default Navbar;
