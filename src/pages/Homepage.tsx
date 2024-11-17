import { Acoustic, FeaturedProducts } from "@/features/product";
import { Hero } from "@/features/home";
import { HowWeWork } from "@/features/home";
import { OurAdvantages } from "@/features/home";
import { Statics } from "@/features/home";
import { ContactUs } from "@/features/home";
import { FeaturedProjects } from "@/features/projects/components/common/FeaturedProjects";

const Homepage = () => {
	return (
		<div>
			<Hero />
			<FeaturedProducts />
			<Acoustic />
			<FeaturedProjects />
			<HowWeWork />
			<OurAdvantages />
			<Statics />
			<ContactUs />
		</div>
	);
};

export default Homepage;
