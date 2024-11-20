import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteProjectService } from "../index";

export const useDeleteProject = () => {
	const { mutate: deleteProject } = useCustomMutation(
		deleteProjectService,
		["projects"],
		"",
		"Deleted project successfully"
	);

	return { deleteProject };
};
