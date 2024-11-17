import { axiosClient } from "@/api/axiosClient";
import { TProjectDTO } from "../types";

type TGetProjectsService = {
	limit?: number;
	page?: number;
	categoryId?: number;
};

export const getProjectsService = async ({
	limit = 10,
	page = 1,
	categoryId,
}: TGetProjectsService) => {
	try {
		const queryParameters = new URLSearchParams();
		queryParameters.append("limit", limit.toString());
		queryParameters.append("page", page.toString());

		if (categoryId) queryParameters.append("categoryId", categoryId.toString());
		const { data }: { data: TProjectDTO[] } = await axiosClient.get(
			`/projects/get-projects/?${queryParameters.toString()}`
		);

		console.log(data);

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};
