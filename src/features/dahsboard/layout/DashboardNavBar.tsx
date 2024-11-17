import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../../public/imgs/Logo2.png.webp";
import { dashboardSideBarLinks } from "./DashboardSideBar";
import { useState, useEffect } from "react";
export const DashboardNavBar = () => {
	const [activePath, setActivePath] = useState<string>("");
	const location = useLocation();

	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	return (
		<nav>
			<div className=" flex items-center justify-between">
				<img className="w-52 hidden lg:block" src={Logo} alt="" />
				<div className="block lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button className="bg-golden hover:bg-golden text-black w-fit">
								<CiMenuFries size={20} />
							</Button>
						</SheetTrigger>
						<SheetContent side={"left" as const}>
							<SheetHeader>
								<SheetTitle>Edit profile</SheetTitle>
								<SheetDescription>
									Make changes to your profile here. Click save when you're
									done.
								</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								{dashboardSideBarLinks.map(heading => (
									<div key={heading.title} className="flex flex-col gap-5">
										<div className="font-[600]">{heading.title}</div>
										{heading.links.map(link => (
											<Link
												to={`${link.path}`}
												className={`flex items-center gap-4 duration-200 p-2 rounded-md font-[600] hover:bg-golden hover:text-black ${
													link.path === activePath ? "bg-golden text-black" : ""
												} `}
												onClick={() => setActivePath(link.path)}
											>
												{link.icon}
												<div>{link.actionName}</div>
											</Link>
										))}
									</div>
								))}
							</div>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="submit">Save changes</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>

				<h1 className="font-[600] hidden lg:block">Jana Dubai Dashboard</h1>

				<div className="flex flex-col gap-1">
					<div>Adam Holland</div>
					<div className="text-emerald-600 font-bold">Admin</div>
				</div>
			</div>
		</nav>
	);
};
