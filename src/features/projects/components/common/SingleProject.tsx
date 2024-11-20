import { Link, useParams } from "react-router-dom";
import { useGetSingleProject } from "../../index";
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

export const SingleProject = () => {
	const { id } = useParams<string>();

	if (!id) return;

	const { singleProjectData, isLoadingSingleProjectData } = useGetSingleProject(
		Number(id)
	);

	const [selectedImg, setSelectedImg] = useState({
		mime_type: "",
		content: "",
	});

	useEffect(() => {
		if (singleProjectData) {
			setSelectedImg(singleProjectData.images[0]);
		}
	}, [singleProjectData]);

	const handleImgClick = (e: { mime_type: string; content: string }) => {
		setSelectedImg(e);
	};

	if (isLoadingSingleProjectData) {
		return (
			<div className="flex justify-center gap-11 py-10 bg-primary-black">
				<Skeleton className="size-[500px] bg-gray-700" />
				<div className="flex flex-col gap-14">
					{Array.from({ length: 4 }).map(_ => (
						<Skeleton className="w-[400px] h-[20px] bg-gray-700" />
					))}
					<Skeleton className="w-[400px] h-[20px] bg-gray-700 mt-auto" />
				</div>
			</div>
		);
	}

	if (!singleProjectData)
		return (
			<div className="flex justify-center gap-11 py-10 bg-primary-black">
				<h1 className="text-xl text-golden">NOT FOUND</h1>
			</div>
		);

	return (
		<div className="py-20 bg-primary-black text-white">
			<div className="container">
				<div className="flex justify-between gap-10">
					<div className="flex flex-col gap-5">
						<img
							className="size-[500px] flex-1 rounded-md"
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
								{singleProjectData?.images.map((image, index) => (
									<CarouselItem
										key={index}
										className="md:basis-1/2 lg:basis-1/4"
									>
										<div className="p-1 size-28">
											<img
												onClick={() => handleImgClick(image)}
												className="size-full cursor-pointer object-cover"
												src={`data:${image.mime_type};base64,${image.content}`}
												alt=""
											/>
										</div>
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
									<Link to={"/shop"} className="text-white">
										Projects
									</Link>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="text-white"></BreadcrumbSeparator>
								<BreadcrumbItem>
									<BreadcrumbPage className="text-white">
										{singleProjectData.name}
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
						<h1 className="text-sm">{singleProjectData.name}</h1>

						<div className="text-sm">
							Category : {singleProjectData.category_name}
						</div>

						{singleProjectData.description.map(desc => (
							<p className="text-sm text-[#ffffffb3]">{desc}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
