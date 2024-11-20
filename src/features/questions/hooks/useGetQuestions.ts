import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getQuestionsService } from "../index";
import { useSearchParams } from "react-router-dom";

type TUseGetQuestions = {
	limit?: number;
	page?: number;
	// answered?: boolean;
};

export const useGetQuestions = ({
	// answered,
	limit,
	page,
}: TUseGetQuestions) => {
	const [searchParams] = useSearchParams();

	const answered = searchParams.get("answered");

	const { data: questions, isLoading: isLoadingQuestions } = useCustomQuery(
		["questions", answered, limit, page],
		() => getQuestionsService({ answered, limit, page })
	);

	return { questions, isLoadingQuestions };
};
