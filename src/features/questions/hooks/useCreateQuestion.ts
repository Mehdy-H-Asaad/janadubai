import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createQuestionService } from "../index";

export const useCreateQuestion = () => {
	const { mutate: createQuestion, isPending: isCreatingQuestion } =
		useCustomMutation(
			createQuestionService,
			["questions"],
			"",
			"Created successfully"
		);

	return { createQuestion, isCreatingQuestion };
};
