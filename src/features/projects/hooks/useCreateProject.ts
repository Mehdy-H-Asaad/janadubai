import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createProjectService } from "../services/create-project.service";

export const useCreateProjects = () => {
	const { mutate: createProject } = useCustomMutation(createProjectService, [
		"projects",
	]);

	return { createProject };
};
