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
			<div className="flex flex-col lg:flex-row items-center justify-center gap-11 py-10 bg-primary-black">
				<Skeleton className="size-72 md:size-96 lg:size-[500px] bg-gray-700" />
				<div className="flex flex-col gap-14">
					{Array.from({ length: 5 }).map((_, index) => (
						<Skeleton
							key={index}
							className="w-72 md:w-[600px] lg:w-[400px] h-[20px] bg-gray-700"
						/>
					))}
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
		<div className="pb-10 bg-primary-black text-white">
			<div className="text-2xl font-medium text-center px-2 py-10 bg-black">
				{singleProjectData.name}
			</div>
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
								{singleProjectData.images.map((image, index) => (
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
									<Link
										to={"/projects"}
										className="`uppercase text-white text-sm text-[#ffffffb3] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-['']"
									>
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
						<h1>{singleProjectData.name}</h1>

						<div>Category : {singleProjectData.category_name}</div>

						<div className="flex flex-col gap-2">
							{singleProjectData.description.map(desc => (
								<p className=" text-[#ffffffb3]">{desc}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
