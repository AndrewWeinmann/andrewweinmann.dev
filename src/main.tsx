// biome-ignore lint/correctness/noUnresolvedImports: React 19 export not recognized by Biome
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import Layout from "./components/layout.tsx";
import About from "./pages/about.tsx";
import Home from "./pages/home.tsx";
import Photos from "./pages/photos.tsx";
import Uses from "./pages/uses.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "photos", element: <Photos /> },
			{ path: "uses", element: <Uses /> },
		],
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
