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

function App() {
	const location = useLocation();

	return (
		<div>
			<Navbar />
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
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
