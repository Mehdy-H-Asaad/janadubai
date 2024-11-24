import { Link, useParams } from "react-router-dom";
import { useGetSingleProduct } from "../../index";
import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { PageBreadCrumb } from "@/components/PageBreadCrumb";

export const SingleProduct = () => {
	const { id } = useParams<string>();

	if (!id) return;

	console.log(id);

	const { singleProductData, isLoadingSingleProductData } = useGetSingleProduct(
		Number(id)
	);

	const [selectedImg, setSelectedImg] = useState({
		mime_type: "",
		content: "",
	});

	useEffect(() => {
		if (singleProductData) {
			setSelectedImg(singleProductData.images[0]);
		}
	}, [singleProductData]);

	const handleImgClick = (e: { mime_type: string; content: string }) => {
		setSelectedImg(e);
	};

	if (isLoadingSingleProductData) {
		return (
			<div className="flex flex-col lg:flex-row items-center justify-center gap-11 py-10 bg-primary-black">
				<Skeleton className="size-72 md:size-96 lg:size-[500px] bg-gray-700" />
				<div className="flex flex-col gap-14">
					{Array.from({ length: 5 }).map(_ => (
						<Skeleton className="w-72 md:w-[600px] lg:w-[400px] h-[20px] bg-gray-700" />
					))}
				</div>
			</div>
		);
	}

	if (!singleProductData)
		return (
			<div className="text-center p-10 justify-between bg-primary-black text-golden text-xl font-bold">
				Product Not found
			</div>
		);

	return (
		<div className="pb-10 bg-primary-black text-white">
			<PageBreadCrumb
				breadcrumbLinkName="Home"
				breadcrumbLink="/"
				breadcrumbPage={singleProductData.name}
			/>
			{/* <div className="text-3xl sm:text-5xl font-medium text-center px-2 py-20 bg-black">
				{singleProductData.name}
			</div> */}
			<div className="container">
				<div className="flex flex-col lg:flex-row justify-between gap-10 my-20">
					<div className="flex flex-col gap-5">
						<img
							className="w-full lg:size-[500px] flex-1 rounded-md"
							src={`data:${selectedImg.mime_type};base64,${selectedImg.content}`}
							alt=""
						/>

						<Carousel
							opts={{
								align: "start",
							}}
							className="w-full "
						>
							<CarouselContent>
								{singleProductData.images.map((image, index) => (
									<CarouselItem key={index} className="basis-1/4 w-16 p-1">
										<img
											onClick={() => handleImgClick(image)}
											className=" cursor-pointer "
											src={`data:${image.mime_type};base64,${image.content}`}
											alt=""
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="bg-white text-black" />
							<CarouselNext className="bg-white text-black" />
						</Carousel>
					</div>

					<div className="flex flex-col gap-10 flex-1">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<Link className="text-white" to="/">
										Home
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="text-white"></BreadcrumbSeparator>
								<BreadcrumbItem>
									<Link to={"/products"} className="text-white">
										Products
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="text-white"></BreadcrumbSeparator>
								<BreadcrumbItem>
									<BreadcrumbPage className="text-white">
										{singleProductData.name}
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
						<h1>{singleProductData.name}</h1>

						<div>Category : {singleProductData.category_name}</div>

						<div className="flex flex-col gap-2">
							{singleProductData.description.map(desc => (
								<p className=" text-[#ffffffb3]">{desc}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
