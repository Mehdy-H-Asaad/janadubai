import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useReplyQuestion } from "../../index";
import { TQuestionDTO } from "../../types";
import { contactSchema } from "@/features/contact";

export const useReplyForm = (question: TQuestionDTO) => {
	const { replyQuestion } = useReplyQuestion();
	const replySchema = contactSchema.pick({ message: true });

	const replyForm = useForm<z.infer<typeof replySchema>>({
		resolver: zodResolver(replySchema),
		defaultValues: {
			message: "",
		},
	});

	const onReply = (values: z.infer<typeof replySchema>) => {
		replyQuestion({ ...values, id: question.id });
	};

	return { replyForm, onReply };
};
