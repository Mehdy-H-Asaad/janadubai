import MainTitle from "@/components/MainTitle";
import testImg from "../../../../public/imgs/cinema-4-1.jpg.webp";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
export const Projects = () => {
	return (
		<section className="bg-primary-black py-20">
			<div className="container">
				<MainTitle
					heading="BEST EVENT & EXHIBITION MANAGEMENT COMPANY"
					subHeading="PROJECTS"
				/>

				<Carousel>
					<CarouselContent>
						{Array.from({ length: 7 }).map(_ => {
							return (
								<CarouselItem className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2">
									<img src={testImg} className="rounded-md mx-auto" alt="" />
									<h1 className="mx-auto block w-fit mt-4 font-[600] uppercase text-white">
										Cinema
									</h1>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
};
