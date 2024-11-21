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
						className="text-white hover:text-white font-[600] text-xl md:text-2xl"
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
