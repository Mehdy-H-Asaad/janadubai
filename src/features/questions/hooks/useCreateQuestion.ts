import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createQuestionService } from "../index";

export const useCreateQuestion = () => {
	const { mutate: createQuestion, isPending: isCreatingQuestion } =
		useCustomMutation(
			createQuestionService,
			["questions"],

			"Your question has been sent successfully"
		);

	return { createQuestion, isCreatingQuestion };
};
