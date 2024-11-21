import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useCustomMutation = <T, K>(
	mutationFunction: (payload: T) => Promise<void | K>,
	queryKey: QueryKey,
	toastMessage?: string
) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: mutationFunction,

		onSuccess: () => {
			if (toastMessage) toast.success(toastMessage);
			queryClient.invalidateQueries({ queryKey: queryKey });
		},
		onError: (error: any) => {
			toast.error(error.message || "Something went wrong.");
		},
	});
};
