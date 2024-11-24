import { DashboardSideBar } from "../dashboard/DashboardSideBar";
import { DashboardNavBar } from "../dashboard/DashboardNavBar";
import { Outlet } from "react-router-dom";

export const DashboardMainLayout = () => {
	return (
		<div className="bg-primary-black text-white pb-6 min-h-screen ">
			<DashboardNavBar />
			<div className="container">
				<div className="flex gap-10 mt-10">
					<DashboardSideBar />
					<div className="flex-[9] bg-black w-full rounded-md py-10 px-4 sm:px-6 ">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
