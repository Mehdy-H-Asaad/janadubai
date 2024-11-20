import { useCustomQuery } from "@/hooks/useCustomQuery";
import { useSearchParams } from "react-router-dom";
import { getProjectsService } from "../index";

type TUseGetProjects = {
	limit?: number;
	page?: number;
	categoryId?: number;
};

export const useGetProjects = ({ limit, page }: TUseGetProjects) => {
	const [searchParams] = useSearchParams();

	const categoryId = Number(searchParams.get("categoryId"));

	const {
		data: projects,
		refetch: refetchProjects,
		isLoading: isLoadingProjects,
		isRefetching: isRefetchingProjects,
	} = useCustomQuery(["projects", categoryId, page], () =>
		getProjectsService({ limit, page, categoryId })
	);

	return { projects, refetchProjects, isLoadingProjects, isRefetchingProjects };
};
