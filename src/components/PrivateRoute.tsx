import { Navigate } from "react-router-dom";

type TPrivateRouteProps = {
	isAdmin: boolean;
	children?: React.ReactNode;
};

const PrivateRoute = ({ isAdmin, children }: TPrivateRouteProps) => {
	const adminStatus = isAdmin ?? localStorage.getItem("userRole") === "admin";

	if (!adminStatus) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};

export default PrivateRoute;
