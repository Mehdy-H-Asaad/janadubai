import { axiosClient } from "@/api/axiosClient";

export const deleteProjectService = async (projectId: number) => {
	try {
		const { data } = await axiosClient.delete(
			`/projects/delete-project/${projectId}`
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};
