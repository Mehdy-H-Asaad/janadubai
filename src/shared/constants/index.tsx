import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoListOutline, IoCreateOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export const navLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About us",
		path: "/about",
	},
	{
		title: "Products",
		path: "/products",
	},
	{
		title: "Projects",
		path: "/projects",
	},
	{
		title: "Our clients",
		path: "/clients",
	},
	{
		title: "Contact us",
		path: "/contact",
	},
	{
		title: "Dashboard",
		path: "/dashboard/users/list-users",
	},
];

export const footerUsefulLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Products",
		path: "/products",
	},
	{
		title: "Projects",
		path: "/projects",
	},
];

export const footerUsefulInfo = [
	{
		title: "About us",
		path: "/about",
	},
	{
		title: "Contact us",
		path: "/contact",
	},
	{
		title: "Privacy policy",
		path: "/policy",
	},
];

export const footerSocials = [
	{
		title: <FaFacebookF size={22} />,
		path: "https://www.facebook.com/janadubaitrading?mibextid=qi2Omg&rdid=zVfmO8VfqrnAbXvH",
	},
	{
		title: <FaInstagram size={22} />,
		path: "https://www.instagram.com/jana.dubai?utm_source=qr&igsh=OWZsdzhrY2FwMHRt",
	},
	{
		title: <FaTiktok size={22} />,
		path: "https://vm.tiktok.com/ZSFGtEcMv/",
	},
	{
		title: <FaYoutube size={22} />,
		path: "https://www.youtube.com/channel/UCeGA6ahQK8kmGxVEIuqVvcQ/",
	},
];

export const footerEmails = [
	{
		email: "admin@janadubai.com",
	},
	{
		email: "info@janadubai.com",
	},
	{
		email: "sales@janadubai.com",
	},
	{
		email: "accounts@janadubai.com",
	},
];

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
	{
		title: "Questions",
		links: [
			{
				path: "/dashboard/questions/list-questions",
				icon: <IoListOutline size={20} />,
				actionName: "List questions",
			},
		],
	},
];
