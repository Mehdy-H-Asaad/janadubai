import { IoCreateOutline, IoListOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export const dashboardSideBarLinks = [
	{
		title: "Users",
		links: [
			{
				path: "/dashboard/users/list-users",
				actionName: "List Users",
				icon: <LuUsers size={20} />,
			},
		],
	},
	{
		title: "Products",

		links: [
			{
				path: "/dashboard/products/list-products",
				icon: <IoListOutline size={20} />,
				actionName: "List products",
			},
			{
				path: "/dashboard/products/create-product",
				actionName: "Create product",
				icon: <IoCreateOutline size={20} />,
			},
		],
	},

	{
		title: "Projects",
		links: [
			{
				path: "/dashboard/projects/list-projects",
				icon: <IoListOutline size={20} />,
				actionName: "List projects",
			},
			{
				path: "/dashboard/projects/create-project",
				actionName: "Create project",
				icon: <IoCreateOutline size={20} />,
			},
		],
	},
	{
		title: "Categories",
		links: [
			{
				path: "/dashboard/categories/list-categories",
				icon: <IoListOutline size={20} />,
				actionName: "List categories",
			},
		],
	},
];

export const DashboardSideBar = () => {
	const [activePath, setActivePath] = useState<string>("");
	const location = useLocation();

	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	return (
		<div className="flex-[2] hidden lg:block">
			{/* <h1 className="text-lg font-[600] text-golden mb-10">MENU</h1> */}

			<div className="flex flex-col gap-10">
				{dashboardSideBarLinks.map(heading => (
					<div key={heading.title} className="flex-col gap-5 hidden lg:flex">
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
