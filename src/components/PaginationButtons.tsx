import { Button } from "./ui/button";

type TPaginationButtons<T> = {
	page: number;
	hanldePreviousPage: () => void;
	handleNextPage: () => void;
	arr: T[];
};

export const PaginationButtons = <T,>({
	page,
	hanldePreviousPage,
	handleNextPage,
	arr,
}: TPaginationButtons<T>) => {
	return (
		<div className="flex items-center justify-center gap-10 mt-32">
			<Button
				disabled={page === 1}
				onClick={hanldePreviousPage}
				className="bg-golden text-black font-medium hover:bg-golden"
			>
				Previous
			</Button>
			<Button
				disabled={arr.length === 0 || arr.length < 10}
				onClick={handleNextPage}
				className="bg-golden text-black font-medium hover:bg-golden"
			>
				Next
			</Button>
		</div>
	);
};
