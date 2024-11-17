import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getUsersService } from "../index";

export const useGetUsers = () => {
	const { data: users, isLoading: isLoadingUsers } = useCustomQuery(
		["users"],
		getUsersService
	);

	return { users, isLoadingUsers };
};
