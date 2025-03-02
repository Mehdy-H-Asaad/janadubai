import MainTitle from "@/components/MainTitle";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "../../index";
import { useGetProducts } from "../../index";
import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedProducts = () => {
	const { products, isLoadingProducts } = useGetProducts({ limit: 7 });

	return (
		<section className="bg-black py-20">
			<div className="container">
				<MainTitle
					heading="WOODEN ACCESSORIES"
					subHeading="FEATURED PRODUCTS"
				/>
				<Carousel className=" hover:cursor-grab">
					<CarouselContent className="px-8">
						{isLoadingProducts ? (
							<div className="flex gap-5">
								{Array.from({ length: 6 }).map((_, index) => (
									<div key={index} className="flex flex-col gap-7">
										<Skeleton className="size-72" />
										<Skeleton className="w-[200px] h-2 " />
									</div>
								))}
							</div>
						) : products && products.length === 0 ? (
							<div className="text-xl font-bold text-golden">No Products</div>
						) : (
							products &&
							products.map(product => (
								<CarouselItem
									key={product.id}
									className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2 cursor-pointer"
								>
									<ProductCard
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
