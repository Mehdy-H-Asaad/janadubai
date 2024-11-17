import { axiosClient } from "@/api/axiosClient";
import { TUpdateProjectDTO } from "../types";

export const updateProjectService = async (projectData: TUpdateProjectDTO) => {
	try {
		console.log(projectData);

		const { data } = await axiosClient.put(
			`/projects/update-project/${projectData.id}`,
			projectData
		);

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};
