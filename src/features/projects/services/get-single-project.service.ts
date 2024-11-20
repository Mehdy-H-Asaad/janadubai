import { axiosClient } from "@/api/axiosClient";
import { TProjectDTO } from "../types";

export const getSingleProjectService = async (id: number) => {
	try {
		const { data }: { data: TProjectDTO } = await axiosClient.get(
			`/projects/get-projects/${id}`
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
