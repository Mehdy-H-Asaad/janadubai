import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteQuestionService } from "../index";

export const useDeleteQuestion = () => {
	const { mutate: deleteQuestion } = useCustomMutation(
		deleteQuestionService,
		["questions"],
		"The question has been deleted successfully"
	);

	return { deleteQuestion };
};
