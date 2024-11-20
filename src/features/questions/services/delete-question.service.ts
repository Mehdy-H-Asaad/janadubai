import { axiosClient } from "@/api/axiosClient";

export const deleteQuestionService = async (id: number) => {
	try {
		const { data } = await axiosClient.delete(
			`/questions/delete-question/${id}`
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
