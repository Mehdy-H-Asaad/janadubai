import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAuthUserService } from "../index";

export const useGetAuthUser = () => {
	const { data: currentAuthUser } = useCustomQuery(
		["users"],
		getAuthUserService
	);

	return { currentAuthUser };
};
