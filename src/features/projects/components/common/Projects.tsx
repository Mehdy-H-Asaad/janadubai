import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import { useGetProjects } from "../../index";
import { useGetCategories } from "@/features/category";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { ProjectCard } from "../../index";
import { PaginationButtons } from "@/components/PaginationButtons";
export const Projects = () => {
	const [page, setPage] = useState<number>(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const [categoryId, setCategoryId] = useState<string | null>(
		searchParams.get("categoryId") || ""
	);
	const [activeCategory, setActiveCategory] = useState<string>("");
	const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
	const { categories, isLoadingCategories } = useGetCategories({
		type: "projects",
	});

	const { projects, isLoadingProjects } = useGetProjects({
		limit: 16,
		page,
	});

	const handleCategoryClick = (selectedCategoryId: string) => {
		const newCategoryId =
			categoryId === selectedCategoryId ? "" : selectedCategoryId;
		setPage(1);
		setCategoryId(newCategoryId);
		setActiveCategory(newCategoryId);
		setIsAllSelected(newCategoryId === "");
		updateSearchParams(
			{ categoryId: newCategoryId },
			searchParams,
			setSearchParams
		);
	};

	const handleNextPage = () => {
		setPage(page => page + 1);
	};
	const hanldePreviousPage = () => {
		setPage(page => page - 1);
	};

	return (
		<div className="bg-primary-black py-10">
			<PageBreadCrumb
				breadcrumbLink="/"
				breadcrumbLinkName="Home"
				breadcrumbPage="Projects"
			/>
			<div className="container">
				<div className="flex items-center gap-10 justify-center text-white">
					{
						<div className="flex items-center gap-10 justify-center text-white mt-10">
							{isLoadingCategories ? (
								<div className="grid grid-cols-1 sm:grid-cols-4  gap-5 text-black">
									{Array.from({ length: 4 }).map((_, index) => (
										<Skeleton key={index} className="w-32 h-2" />
									))}
								</div>
							) : (
								<>
									<div
										onClick={() => handleCategoryClick("")}
										className={`text-[#ffffffb3] capitalize font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-[''] ${
											isAllSelected ? "text-white before:w-full" : ""
										}`}
									>
										All
									</div>
									{categories &&
										categories.map(cat => (
											<div
												key={cat.id}
												onClick={() => handleCategoryClick(cat.id.toString())}
												className={`text-[#ffffffb3] capitalize font-[600] cursor-pointer duration-300 hover:text-white relative before:w-0 before:duration-300 before:h-[2px] before:bg-golden before:hover:w-full before:absolute before:bottom-0 before:left-0 before:content-[''] ${
													activeCategory === cat.id.toString()
														? "text-white before:w-full"
														: ""
												} `}
											>
												{cat.name}
											</div>
										))}
								</>
							)}
						</div>
					}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 ">
					{isLoadingProjects ? (
						Array.from({ length: 4 }).map((_, index) => (
							<div key={index} className="flex flex-col gap-7 mx-auto">
								<Skeleton className="size-60 sm:size-72  " />
								<Skeleton className="w-[200px] h-2 " />
							</div>
						))
					) : projects && projects.length === 0 ? (
						<div className="text-xl font-bold text-golden">No projects</div>
					) : (
						projects &&
						projects.map(project => (
							<ProjectCard
								key={project.id}
								id={project.id}
								image={project.images}
								title={project.name}
							/>
						))
					)}
				</div>

				<PaginationButtons
					arr={projects || []}
					handleNextPage={handleNextPage}
					hanldePreviousPage={hanldePreviousPage}
					page={page}
				/>
			</div>
		</div>
	);
};
