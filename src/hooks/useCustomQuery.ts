import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useCustomQuery = <T>(
	queryKey: QueryKey,
	queryFn: () => Promise<T>,
	queryOptions?: UseQueryOptions<T, Error>
) => {
	return useQuery<T>({
		queryKey: queryKey,
		queryFn: queryFn,
		...queryOptions,
	});
};
