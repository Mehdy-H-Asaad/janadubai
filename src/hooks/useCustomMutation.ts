import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";

export const useCustomMutation = <T, K>(
	mutationFunction: (payload: T) => Promise<void | K>,
	queryKey: QueryKey
) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: mutationFunction,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKey });
		},
		onError: error => {
			throw new Error(error.message);
		},
	});
};
