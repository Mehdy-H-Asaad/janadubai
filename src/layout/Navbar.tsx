import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../public/imgs/Logo2.png.webp";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navLinks } from "@/shared/constants";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { useAuthStore } from "@/features/auth/state/auth.state";

const Navbar = () => {
	const { isAdmin, clearAuth, authUser } = useAuthStore();
	const { signOut, isPendingSignOut } = useLogout();
	const location = useLocation();
	const [activeTitle, setActiveTitle] = useState<string>("home");

	const handleLogout = () => {
		!isPendingSignOut && clearAuth();
		signOut({});
	};

	useEffect(() => {
		const currentLink = navLinks.find(link => link.path === location.pathname);
		setActiveTitle(currentLink ? currentLink.title : "");
	}, [location.pathname]);

	return (
		<nav className="bg-primary-black h-24 flex items-center border-b border-b-[#ffffff26]">
			<div className="container flex items-center justify-between">
				<img src={Logo} className="w-36 sm:w-52 object-contain" alt="Logo" />

				<div className="hidden xl:flex gap-5 items-center ml-auto">
					{navLinks.map(ele => (
						<Link
							key={ele.title}
							onClick={() => setActiveTitle(ele.title)}
							className={`uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-[''] ${
								activeTitle.toLowerCase() === ele.title.toLowerCase()
									? "before:w-full text-white"
									: ""
							} ${ele.title === "Dashboard" && !isAdmin ? "hidden" : ""}`}
							to={ele.path}
						>
							{ele.title}
						</Link>
					))}
				</div>

				{/* Authentication Links */}
				<div className="ml-auto mr-5 xl:mr-0 xl:ml-5">
					{isPendingSignOut ? (
						<div className="uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']">
							Logging out
						</div>
					) : authUser ? (
						<div
							className="uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']"
							onClick={handleLogout}
						>
							Logout
						</div>
					) : (
						<Link
							// onClick={() => Navigate()}
							className={`${
								location.pathname === "/login" ? "before:w-full text-white" : ""
							} uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']`}
							to="/login"
						>
							Login
						</Link>
					)}
				</div>

				{/* Responsive Navbar */}
				<ResponsiveNavbar />
			</div>
		</nav>
	);
};

export default Navbar;
