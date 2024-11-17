import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const useCustomMutation = <T, K>(
	mutationFunction: (payload: T) => Promise<void | K>,
	queryKey: QueryKey,
	navigateTo?: string,
	toastMessage?: string
) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: mutationFunction,

		onSuccess: () => {
			if (toastMessage) toast.success(toastMessage);
			queryClient.invalidateQueries({ queryKey: queryKey });
			if (navigateTo) navigate(navigateTo);
		},
		onError: error => {
			throw new Error(error.message);
		},
	});
};
