import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryProvider } from "./services/providers/ReactQueryProvider.tsx";
import ScrollToTop from "./components/ScrollTo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<ReactQueryProvider>
				<App />
			</ReactQueryProvider>
		</BrowserRouter>
	</React.StrictMode>
);
