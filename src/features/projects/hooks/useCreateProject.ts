import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createProjectService } from "../index";

export const useCreateProjects = () => {
	const { mutate: createProject, isPending: isCreatingProject } =
		useCustomMutation(
			createProjectService,
			["projects"],

			"Created project successfully"
		);

	return { createProject, isCreatingProject };
};
