import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateProjectService } from "../index";

export const useUpdateProjects = () => {
	const { mutate: updateProject, isPending: isUpdatingProject } =
		useCustomMutation(
			updateProjectService,
			["projects"],
			"",
			"Updated project successfully"
		);

	return { updateProject, isUpdatingProject };
};
