import MainTitle from "@/components/MainTitle";
import {
	Carousel,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	CarouselItem,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useGetCategories } from "@/features/category";
import { Skeleton } from "@/components/ui/skeleton";

export const Acoustic = () => {
	const { categories } = useGetCategories();
	const acousticId = categories?.find(
		cat => cat.name.toLowerCase() === "acoustic"
	)?.id;

	const { products, isLoadingProducts } = useGetProducts({
		limit: 8,
		selectedCategoryId: acousticId,
	});

	return (
		<section className="bg-black py-20">
			<MainTitle
				heading="SOUND INSULATION MATERIALS"
				subHeading="OUR ACOUSTIC"
			/>
			<div className="container">
				<Carousel>
					<CarouselContent>
						{isLoadingProducts ? (
							<div className="flex gap-5">
								{Array.from({ length: 6 }).map(_ => (
									<div className="flex flex-col gap-7">
										<Skeleton className="size-72" />
										<Skeleton className="w-[200px] h-2 " />
									</div>
								))}
							</div>
						) : !products ? (
							<div className="text-xl font-bold text-golden">No Products</div>
						) : products.length === 0 ? (
							<div className="text-xl font-bold text-golden">No Products</div>
						) : (
							products.map(product => (
								<CarouselItem className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2 cursor-pointer">
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
