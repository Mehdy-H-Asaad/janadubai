import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { dashboardSideBarLinks } from "@/shared/constants";

export const DashboardSideBar = () => {
	const [activePath, setActivePath] = useState<string>("");
	const location = useLocation();

	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	return (
		<div className="flex-[2] hidden lg:block">
			<div className="flex flex-col gap-10">
				{dashboardSideBarLinks.map(heading => (
					<div key={heading.title} className="flex-col gap-5 hidden lg:flex">
						<div className="font-[600]">{heading.title}</div>
						{heading.links.map(link => (
							<Link
								key={link.path}
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

				<Link
					to={"/"}
					className="flex items-center gap-5 mt-10 duration-200 p-2 rounded-md font-[600] hover:bg-golden hover:text-black"
				>
					<div>Return to store</div>
					<FaArrowLeftLong size={24} />
				</Link>
			</div>
		</div>
	);
};
