import { useFieldArray, useForm } from "react-hook-form";
import { projectSchema } from "../index";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateProjects } from "../index";

export const useUpdateProjectForm = () => {
	const { updateProject, isUpdatingProject } = useUpdateProjects();

	const updateProjectSchema = projectSchema;

	const updateProjectForm = useForm<z.infer<typeof updateProjectSchema>>({
		resolver: zodResolver(updateProjectSchema),
		defaultValues: {
			images: [],
			name: "",
			category_id: "",
			description: [""],
		},
	});

	const {
		fields: projectImages,
		append: addNewImg,
		remove: removeImg,
	} = useFieldArray({
		control: updateProjectForm.control,
		name: "images",
	});

	const description = updateProjectForm.watch("description");

	const addNewDescription = () => {
		const currentDescriptions = updateProjectForm.getValues("description");
		updateProjectForm.setValue("description", [...currentDescriptions, ""]);
	};

	const removeDescription = (index: number) => {
		const currentDescriptions = updateProjectForm.getValues("description");
		updateProjectForm.setValue(
			"description",
			currentDescriptions.filter((_, i) => i !== index)
		);
	};

	const onUpdateProject = (
		values: z.infer<typeof projectSchema>,
		projectId: number
	) => {
		updateProject({ ...values, id: projectId });
	};

	return {
		addNewDescription,
		removeImg,
		addNewImg,
		description,
		onUpdateProject,
		projectImages,
		updateProjectForm,
		updateProjectSchema,
		removeDescription,
		isUpdatingProject,
	};
};
