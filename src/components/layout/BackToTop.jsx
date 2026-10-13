import { useState, useEffect } from "react";

function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 400);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<button
			className={`back-to-top ${visible ? "back-to-top-visible" : ""}`}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Back to top"
		>
			<svg viewBox="0 0 24 24">
				<polyline points="18 15 12 9 6 15" />
			</svg>
		</button>
	);
}

export default BackToTop;

