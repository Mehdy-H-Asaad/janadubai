import { axiosClient } from "@/api/axiosClient";
import { TReplyToQuestionDTO } from "../types";
import toast from "react-hot-toast";

export const replyQuestionService = async (replyData: TReplyToQuestionDTO) => {
	try {
		const { data } = await axiosClient.post(
			`/questions/answer-question/`,
			replyData
		);

		return toast.success(data.message);
	} catch (error: any) {
		throw new Error(error.response.data.detail);
	}
};
