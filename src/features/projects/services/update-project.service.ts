import { axiosClient } from "@/api/axiosClient";
import { TProjectDTO, TUpdateProjectDTO } from "../types";

export const updateProjectService = async (projectData: TUpdateProjectDTO) => {
	try {
		const { data }: { data: TProjectDTO } = await axiosClient.put(
			`/projects/update-project/${projectData.id}`,
			projectData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
