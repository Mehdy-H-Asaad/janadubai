import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./layout/Footer";
import AboutPage from "./pages/AboutPage";
import { AnimatePresence } from "framer-motion";
import OurClientsPage from "./pages/OurClientsPage";
import ContactPage from "./pages/ContactPage";
import { Login } from "./features/auth/components/Login";
import { Signup } from "./features/auth/components/Signup";
import { ShopPage } from "./pages/ShopPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { DashboardMainLayout } from "./features/dahsboard/layout/DashboardMainLayout";
import { DashCreateProductPage } from "./pages/dashboard/product/DashCreateProductPage";
import { DashboardListUsersPage } from "./pages/dashboard/user/DashboardListUsersPage";
import { ListCategoriesPage } from "./pages/dashboard/category/ListCategoriesPage";
import { DashboardListProductsPage } from "./pages/dashboard/product/DashboardListProductsPage";
import { DashCreateProjectPage } from "./pages/dashboard/project/DashCreateProjectPage";
import { DashListProjectsPage } from "./pages/dashboard/project/DashListProjectsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { SingleProjectPage } from "./pages/SingleProjectPage";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import { useGetAuthUser } from "./features/auth/hooks/useGetAuthUser";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { useEffect } from "react";

function App() {
	const location = useLocation();
	const isDashboardPath = location.pathname.startsWith("/dashboard");

	const { isAdmin } = useGetAuthUser();

	return (
		<div>
			{!isDashboardPath && <Navbar />}
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/clients" element={<OurClientsPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/products" element={<ShopPage />} />
					<Route path="/forgot" element={<ForgotPasswordPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/products/:id" element={<SingleProductPage />} />
					<Route path="/projects/:id" element={<SingleProjectPage />} />

					<Route
						path="dashboard/*"
						element={
							<PrivateRoute isAdmin={isAdmin}>{DashboardRoutes()}</PrivateRoute>
						}
					></Route>
				</Routes>
			</AnimatePresence>
			{!isDashboardPath && <Footer />}
			<Toaster />
		</div>
	);
}

export default App;

// <Route path="/dashboard" element={<DashboardMainLayout />}>
// 	<Route index element={<DashboardPage />} />
// 	<Route
// 		path="/dashboard/products/create-product"
// 		element={<DashCreateProductPage />}
// 	/>
// 	<Route
// 		path="/dashboard/users/list-users"
// 		element={<DashboardListUsersPage />}
// 	/>
// 	<Route
// 		path="/dashboard/categories/list-categories"
// 		element={<ListCategoriesPage />}
// 	/>
// 	<Route
// 		path="/dashboard/products/list-products"
// 		element={<DashboardListProductsPage />}
// 	/>
// 	<Route
// 		path="/dashboard/projects/create-project"
// 		element={<DashCreateProjectPage />}
// 	/>
// 	<Route
// 		path="/dashboard/projects/list-projects"
// 		element={<DashListProjectsPage />}
// 	/>
// </Route>
{
	/* </Route> */
}

{
	/* <Route path="/dashboard" element={<DashboardMainLayout />}>
							<Route index element={<DashboardPage />} />
							<Route
								path="/dashboard/products/create-product"
								element={<DashCreateProductPage />}
							/>
							<Route
								path="/dashboard/users/list-users"
								element={<DashboardListUsersPage />}
							/>
							<Route
								path="/dashboard/categories/list-categories"
								element={<ListCategoriesPage />}
							/>
							<Route
								path="/dashboard/products/list-products"
								element={<DashboardListProductsPage />}
							/>
							<Route
								path="/dashboard/projects/create-project"
								element={<DashCreateProjectPage />}
							/>
							<Route
								path="/dashboard/projects/list-projects"
								element={<DashListProjectsPage />}
							/>
						</Route> */
}
