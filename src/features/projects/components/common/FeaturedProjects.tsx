import MainTitle from "@/components/MainTitle";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetProjects } from "../../hooks/useGetProjects";
import { ProjectCard } from "./ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
export const FeaturedProjects = () => {
	const { projects, isLoadingProjects } = useGetProjects({ limit: 6 });

	return (
		<section className="bg-primary-black py-20">
			<div className="container">
				<MainTitle
					heading="BEST EVENT & EXHIBITION MANAGEMENT COMPANY"
					subHeading="PROJECTS"
				/>

				<Carousel>
					<CarouselContent>
						{isLoadingProjects ? (
							<div className="flex gap-5">
								{Array.from({ length: 6 }).map(_ => (
									<div className="flex flex-col gap-7">
										<Skeleton className="size-72" />
										<Skeleton className="w-[200px] h-2 " />
									</div>
								))}
							</div>
						) : !projects ? (
							<div className="text-xl font-bold text-golden">No projects</div>
						) : projects.length === 0 ? (
							<div className="text-xl font-bold text-golden">No projects</div>
						) : (
							projects.map(product => (
								<CarouselItem className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2 cursor-pointer">
									<ProjectCard
										id={product.id}
										image={product.images}
										title={product.name}
									/>
								</CarouselItem>
							))
						)}
					</CarouselContent>
					<CarouselPrevious className="hidden sm:flex" />
					<CarouselNext className="hidden sm:flex" />
				</Carousel>
			</div>
		</section>
	);
};