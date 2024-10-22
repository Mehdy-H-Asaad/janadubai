import MainTitle from "../../../components/MainTitle";
import testImg from "../../../../public/imgs/felt-kece-panel-1.webp";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";

export const Acoustic = () => {
	return (
		<section className="bg-black py-20">
			<MainTitle
				heading="SOUND INSULATION MATERIALS"
				subHeading="OUR ACOUSTIC"
			/>
			<div className="container">
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
