import { useAuthStore } from "@/features/auth/state/auth.state";
import { Navigate } from "react-router-dom";

type TPrivateRouteProps = {
	children?: React.ReactNode;
};

const PrivateRoute = ({ children }: TPrivateRouteProps) => {
	const { authUser, isAdmin } = useAuthStore();

	return (!authUser && !isAdmin) || !isAdmin ? (
		<Navigate to="/login" replace />
	) : (
		children
	);
};

export default PrivateRoute;
