import { axiosClient } from "@/api/axiosClient";
import { TCreateQuestionDTO, TQuestionDTO } from "../types";

export const createQuestionService = async (
	questionData: TCreateQuestionDTO
) => {
	try {
		const { data }: { data: TQuestionDTO } = await axiosClient.post(
			"/questions/create-question/",
			questionData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
