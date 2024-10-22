import { Acoustic, FeaturedProducts, Projects } from "@/features/product";
import { Hero } from "@/features/home";
import { HowWeWork } from "@/features/home";
import { OurAdvantages } from "@/features/home";
import { Statics } from "@/features/home";
import { ContactUs } from "@/features/home";

const Homepage = () => {
	return (
		<div>
			<Hero />
			<FeaturedProducts />
			<Projects />
			<Acoustic />
			<HowWeWork />
			<OurAdvantages />
			<Statics />
			<ContactUs />
		</div>
	);
};

export default Homepage;
