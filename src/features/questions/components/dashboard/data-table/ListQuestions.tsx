import MainTitle from "@/components/MainTitle";

import { Skeleton } from "@/components/ui/skeleton";
import { DataTableQuestions } from "../../../index";
import { ColumnsQuestions } from "../../../index";
import { useGetQuestions } from "../../../index";

export const ListQuestions = () => {
	const { questions, isLoadingQuestions } = useGetQuestions({});

	return (
		<div className="container mx-auto py-10">
			<MainTitle
				heading="Questions from your customers"
				subHeading="All questions"
			/>
			{isLoadingQuestions ? (
				<div className="flex flex-col gap-10 justify-center mt-10">
					<div className="flex items-center justify-between">
						<Skeleton className="w-60 h-6" />
						<Skeleton className="w-40 h-6" />
					</div>
					{Array.from({ length: 10 }).map((_, index) => (
						<div key={index} className="flex flex-col gap-5">
							<Skeleton className="w-600 h-3" />
							<Skeleton className="w-40 h-3" />
						</div>
					))}
				</div>
			) : (
				<DataTableQuestions columns={ColumnsQuestions} data={questions || []} />
			)}
		</div>
	);
};
