import { BsCart3 } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

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
	// {
	// 	title: <BsCart3 />,
	// 	path: "/cart",
	// },
	{
		title: <IoMdHeartEmpty />,
		path: "/favorite",
	},
	{
		title: <IoPersonOutline size={24} />,
		path: "/login",
	},
];

export const footerUsefulLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Products",
		path: "/prodcuts",
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
		title: "Contact usd",
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
		email: "mailto:accounts@janadubai.com",
	},
];
