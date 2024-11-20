import { axiosClient } from "@/api/axiosClient";
import { TCreateProjectDTO, TProjectDTO } from "../types";

export const createProjectService = async (projectData: TCreateProjectDTO) => {
	try {
		const { data }: { data: TProjectDTO } = await axiosClient.post(
			"/projects/create-project/",
			projectData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
