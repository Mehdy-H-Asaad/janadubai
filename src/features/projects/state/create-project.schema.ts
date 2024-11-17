import { useFieldArray, useForm } from "react-hook-form";
import { projectSchema } from "./project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateProjects } from "../hooks/useCreateProject";

export const useCreateProjectForm = () => {
	const { createProject } = useCreateProjects();

	const createProjectSchema = projectSchema;

	const createProjectForm = useForm<z.infer<typeof createProjectSchema>>({
		resolver: zodResolver(createProjectSchema),
		defaultValues: {
			images: [],
			name: "",
			category_id: "",
			description: [""],
		},
	});

	const {
		fields: images,
		append: addNewImg,
		remove: removeImg,
	} = useFieldArray({
		control: createProjectForm.control,
		name: "images",
	});

	const description = createProjectForm.watch("description");

	const addNewDescription = () => {
		const currentDescriptions = createProjectForm.getValues("description");
		createProjectForm.setValue("description", [...currentDescriptions, ""]);
	};

	const removeDescription = (index: number) => {
		const currentDescriptions = createProjectForm.getValues("description");
		createProjectForm.setValue(
			"description",
			currentDescriptions.filter((_, i) => i !== index)
		);
	};

	const onCreateProject = (values: z.infer<typeof projectSchema>) => {
		createProject(values);
	};

	return {
		addNewImg,
		addNewDescription,
		description,
		createProjectSchema,
		createProjectForm,
		removeDescription,
		images,
		removeImg,
		onCreateProject,
	};
};
