import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

function Layout() {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Outlet />
			<Footer />
			<BackToTop />
		</>
	);
}

export default Layout;
