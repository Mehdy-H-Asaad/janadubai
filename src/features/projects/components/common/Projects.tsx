import { PageBreadCrumb } from "@/components/PageBreadCrumb";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetCategories } from "@/features/category";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { ProjectCard } from "./ProjectCard";
import { PaginationButtons } from "@/components/PaginationButtons";
export const Projects = () => {
	const [page, setPage] = useState<number>(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const [categoryId, setCategoryId] = useState<string | null>(
		searchParams.get("categoryId") || ""
	);
	const [activeCategory, setActiveCategory] = useState<string>("");
	const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
	const { categories, isLoadingCategories } = useGetCategories();
	const { projects, isLoadingProjects } = useGetProjects({
		limit: 16,
		page,
	});
	useEffect(() => {
		setSearchParams("");
	}, []);

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

	const projectsCategories = categories?.filter(
		category => category.type === "projects"
	);

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
								<div className="grid grid-cols-4 gap-5 text-black">
									{Array.from({ length: 4 }).map(_ => (
										<Skeleton className="w-32 h-2" />
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
									{projectsCategories?.map(cat => (
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

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 ">
					{isLoadingProjects ? (
						Array.from({ length: 4 }).map(_ => (
							<div className="flex flex-col gap-7">
								<Skeleton className="size-72" />
								<Skeleton className="w-[200px] h-2 " />
							</div>
						))
					) : !projects ? (
						<div className="text-xl font-bold text-golden">No projects</div>
					) : projects.length === 0 ? (
						<div className="text-xl font-bold text-golden">No projects</div>
					) : (
						projects.map(project => (
							<ProjectCard
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
