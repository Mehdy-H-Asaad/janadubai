import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { DashboardRoutes } from "./routes/DashboardRoutes";

// Lazy loading of page components
const Home = lazy(() => import("./pages/Homepage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const OurClientsPage = lazy(() => import("./pages/OurClientsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const SingleProjectPage = lazy(() => import("./pages/SingleProjectPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));

function App() {
	const location = useLocation();
	const isDashboardPath = location.pathname.startsWith("/dashboard");

	return (
		<>
			<Suspense
				fallback={
					<div className="bg-black fixed h-screen w-full flex items-center justify-center text-5xl font-bold text-white">
						Loading...
					</div>
				}
			>
				{!isDashboardPath && <Navbar />}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/clients" element={<OurClientsPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/products" element={<ShopPage />} />
					<Route path="/forgot" element={<ForgotPasswordPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/products/:id" element={<SingleProductPage />} />
					<Route path="/projects/:id" element={<SingleProjectPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />
					<Route
						path="dashboard/*"
						element={<PrivateRoute>{DashboardRoutes()}</PrivateRoute>}
					/>
				</Routes>

				{!isDashboardPath && <Footer />}
			</Suspense>
			<Toaster />
		</>
	);
}

export default App;
