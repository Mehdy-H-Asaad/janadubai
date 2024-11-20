import { useCustomMutation } from "@/hooks/useCustomMutation";
import { replyQuestionService } from "../index";

export const useReplyQuestion = () => {
	const { mutate: replyQuestion } = useCustomMutation(replyQuestionService, [
		"questions",
	]);

	return { replyQuestion };
};
