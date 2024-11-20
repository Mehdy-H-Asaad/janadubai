import { DashboardMainLayout } from "@/layout/dashboard/DashboardMainLayout";
import { ListCategoriesPage } from "@/pages/dashboard/category/ListCategoriesPage";
import { DashboardListProductsPage } from "@/pages/dashboard/product/DashboardListProductsPage";
import { DashCreateProductPage } from "@/pages/dashboard/product/DashCreateProductPage";
import { DashCreateProjectPage } from "@/pages/dashboard/project/DashCreateProjectPage";
import { DashListProjectsPage } from "@/pages/dashboard/project/DashListProjectsPage";
import { DashListQuestionsPage } from "@/pages/dashboard/questions/DashListQuestionsPage";
import { DashboardListUsersPage } from "@/pages/dashboard/user/DashboardListUsersPage";

import { Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<DashboardMainLayout />}>
				<Route
					path="/products/create-product"
					element={<DashCreateProductPage />}
				/>
				<Route
					index
					path="/users/list-users"
					element={<DashboardListUsersPage />}
				/>
				<Route
					path="/categories/list-categories"
					element={<ListCategoriesPage />}
				/>
				<Route
					path="/products/list-products"
					element={<DashboardListProductsPage />}
				/>
				<Route
					path="/projects/create-project"
					element={<DashCreateProjectPage />}
				/>
				<Route
					path="/projects/list-projects"
					element={<DashListProjectsPage />}
				/>
				<Route
					path="/questions/list-questions"
					element={<DashListQuestionsPage />}
				/>
			</Route>
		</Routes>
	);
};
