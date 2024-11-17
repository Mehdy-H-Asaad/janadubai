import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/shared/constants";
import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const ResponsiveNavbar = () => {
	const [activeTitle, setActiveTitle] = useState<string>("home");

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
		<div className="flex xl:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button className="bg-golden hover:bg-golden text-black w-fit">
						<IoIosMenu
							className="block xl:hidden text-black cursor-pointer"
							size={24}
						/>
					</Button>
				</SheetTrigger>
				<SheetContent className="bg-black text-white" side={"left" as const}>
					<SheetHeader>
						<SheetTitle className="text-white mb-10">Navbar</SheetTitle>
					</SheetHeader>
					<div className="grid gap-10 py-4">
						{navLinks.map(nav => (
							<SheetClose asChild>
								<Link
									to={nav.path}
									key={nav.title}
									className={`${
										activeTitle.toLowerCase() === nav.title.toLowerCase()
											? "before:w-full text-white"
											: ""
									} w-fit uppercase text-white text-sm text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']`}
								>
									{nav.title}
								</Link>
							</SheetClose>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default ResponsiveNavbar;
