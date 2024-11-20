import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./layout/Footer";
import AboutPage from "./pages/AboutPage";
import OurClientsPage from "./pages/OurClientsPage";
import ContactPage from "./pages/ContactPage";
import { Login } from "./features/auth/components/Login";
import { Signup } from "./features/auth/components/Signup";
import { ShopPage } from "./pages/ShopPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { SingleProjectPage } from "./pages/SingleProjectPage";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { ResetPassword } from "./features/auth";

function App() {
	const location = useLocation();
	const isDashboardPath = location.pathname.startsWith("/dashboard");

	return (
		<>
			{!isDashboardPath && <Navbar />}
			<Routes>
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
				<Route path="/reset-password/" element={<ResetPassword />} />
				<Route
					path="dashboard/*"
					element={<PrivateRoute>{DashboardRoutes()}</PrivateRoute>}
				></Route>
			</Routes>
			{!isDashboardPath && <Footer />}
			<Toaster />
		</>
	);
}

export default App;
