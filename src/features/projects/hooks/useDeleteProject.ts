import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteProjectService } from "../services/delete-project.service";

export const useDeleteProject = () => {
	const { mutate: deleteProject } = useCustomMutation(deleteProjectService, [
		"projects",
	]);

	return { deleteProject };
};
