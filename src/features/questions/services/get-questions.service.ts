import { axiosClient } from "@/api/axiosClient";

type TGetQuestionsService = {
	limit?: number;
	page?: number;
	answered?: string | null;
};

export const getQuestionsService = async ({
	limit = 10,
	answered,
	page = 1,
}: TGetQuestionsService) => {
	try {
		const queryParameteres = new URLSearchParams();

		queryParameteres.append("limit", limit.toString());
		queryParameteres.append("page", page.toString());

		if (answered) queryParameteres.append("answered", answered.toString());
		const { data } = await axiosClient.get(
			`/questions/get-questions/?${queryParameteres.toString()}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
