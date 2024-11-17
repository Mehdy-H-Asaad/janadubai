// import { useGetProducts } from "../../../index";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";
import { ColumnsProject } from "./ColumnsProjects";
import { DataTableProject } from "./DataTableProjects";
import { Skeleton } from "@/components/ui/skeleton";
import MainTitle from "@/components/MainTitle";

export const ListProjects = () => {
	const { projects, isLoadingProjects } = useGetProjects({ limit: 10 });

	return (
		<div className="container mx-auto py-10">
			<MainTitle heading="List of your projects" subHeading="Projects" />
			{isLoadingProjects ? (
				<div className="flex flex-col gap-10 justify-center mt-10">
					<div className="flex items-center justify-between">
						<Skeleton className="w-60 h-6" />
						<Skeleton className="w-40 h-6" />
					</div>
					{Array.from({ length: 10 }).map(_ => (
						<div className="flex flex-col gap-5">
							<Skeleton className="w-600 h-3" />
							<Skeleton className="w-40 h-3" />
						</div>
					))}
				</div>
			) : (
				<DataTableProject columns={ColumnsProject} data={projects || []} />
			)}
		</div>
	);
};
