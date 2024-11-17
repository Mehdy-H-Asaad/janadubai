import MainTitle from "@/components/MainTitle";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { useGetProjects } from "@/features/projects/hooks/useGetProjects";

export const TableProjects = () => {
	const { projects, isLoadingProjects } = useGetProjects({ limit: 5 });

	return (
		<div className="flex flex-col">
			<div className="flex justify-start">
				<MainTitle
					heading="A list of your recent projects."
					subHeading="Projects"
				/>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[300px]">Project Name</TableHead>
						<TableHead className="w-[300px]">Project Image</TableHead>
						<TableHead className="w-[300px]">Cateogry</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{isLoadingProjects ? (
						<div className="flex flex-col gap-10 justify-center mt-10">
							{Array.from({ length: 4 }).map(_ => (
								<div className="flex flex-col gap-5">
									<Skeleton className="w-full h-2" />
									<Skeleton className="w-40 h-2" />
								</div>
							))}
						</div>
					) : (
						projects?.map(project => (
							<TableRow key={project.id}>
								<TableCell className="font-medium">{project.name}</TableCell>

								<TableCell className="">
									<img
										src={`data:${project.images[0].mime_type};base64,${project.images[0].content}`}
										alt=""
										className="size-20 rounded-md "
									/>
								</TableCell>
								<TableCell>{project.category_name}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
};
