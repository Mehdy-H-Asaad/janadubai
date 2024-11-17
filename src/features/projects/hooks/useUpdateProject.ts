import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateProjectService } from "../services/update-project.service";

export const useUpdateProjects = () => {
	const { mutate: updateProject } = useCustomMutation(updateProjectService, [
		"projects",
	]);

	return { updateProject };
};
