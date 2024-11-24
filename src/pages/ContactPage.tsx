import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import { ContactContent } from "@/features/contact";

const ContactPage = () => {
	return (
		<>
			<PageBreadCrumb
				breadcrumbLinkName="Home"
				breadcrumbLink="/"
				breadcrumbPage="Contact us"
			/>
			<ContactContent />;
		</>
	);
};

export default ContactPage;
