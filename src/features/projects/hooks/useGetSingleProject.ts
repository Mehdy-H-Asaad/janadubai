import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getSingleProjectService } from "../services/get-single-project.service";

export const useGetSingleProject = (projectId: number) => {
	const { data: singleProjectData, isLoading: isLoadingSingleProjectData } =
		useCustomQuery(["project", projectId], () =>
			getSingleProjectService(projectId)
		);

	return { singleProjectData, isLoadingSingleProjectData };
};
