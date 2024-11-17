import { axiosClient } from "@/api/axiosClient";
import { TCreateProjectDTO } from "../types";

export const createProjectService = async (projectData: TCreateProjectDTO) => {
	try {
		const { data } = await axiosClient.post(
			"/projects/create-project",
			projectData
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
