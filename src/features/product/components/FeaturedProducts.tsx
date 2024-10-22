import testImg from "../../../../public/imgs/Reception-700-700-1.webp";
import MainTitle from "../../../components/MainTitle";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const FeaturedProducts = () => {
	return (
		<section className="bg-black py-20">
			<div className="container">
				<MainTitle
					heading="WOODEN ACCESSORIES"
					subHeading="FEATURED PRODUCTS"
				/>
				<Carousel className=" hover:cursor-grab">
					<CarouselContent className="px-8">
						{Array.from({ length: 5 }).map(_ => {
							return (
								<CarouselItem className="text-white lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
									<img
										className="w-80 rounded-lg mx-auto"
										src={testImg}
										alt=""
									/>
									<span className="mx-auto block w-fit mt-4 font-[600] uppercase">
										Reciption
									</span>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselPrevious className="hidden sm:flex" />
					<CarouselNext className="hidden sm:flex" />
				</Carousel>
			</div>
		</section>
	);
};
