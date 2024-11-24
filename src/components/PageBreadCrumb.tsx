import { Link } from "react-router-dom";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "./ui/breadcrumb";

type TPageBreadCrumb = {
	breadcrumbPage: string;
	breadcrumbLink: string;
	breadcrumbLinkName: string;
};

export const PageBreadCrumb = ({
	breadcrumbPage,
	breadcrumbLink,
	breadcrumbLinkName,
}: TPageBreadCrumb) => {
	return (
		<Breadcrumb className="flex items-center justify-center text-center py-10 bg-black ">
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link
						className="text-xl md:text-2xl capitalize text-white text-[#ffffffb3] font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']"
						to={breadcrumbLink}
					>
						{breadcrumbLinkName}
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="text-white" />
				<BreadcrumbItem>
					<BreadcrumbPage className="text-white font-[600] text-xl md:text-2xl">
						{breadcrumbPage}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};
