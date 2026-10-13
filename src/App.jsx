import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/layout/HomePage";
import MenuPage from "./components/pages/Menu/layout/Menu";
import AboutPage from "./components/pages/About/About";
import GalleryPage from "./components/pages/Gallery/Gallery";
import ContactPage from "./components/pages/Contact/Contact";
import ReservePage from "./components/pages/Reserve/Reserve";
import NotFound from "./components/pages/NotFound";

function App() {
	return (
		<BrowserRouter basename="/Restaurant">
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="menu" element={<MenuPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="reserve" element={<ReservePage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
