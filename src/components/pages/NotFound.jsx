import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
	return (
		<section className="notfound">
			<div className="notfound-content">
				<p className="notfound-eyebrow">PAGE NOT FOUND</p>
				<h1 className="notfound-title">404</h1>
				<p className="notfound-description">
					The page you are looking for doesn't exist or has been moved.
				</p>
				<Link to="/" className="notfound-button">
					RETURN HOME
				</Link>
			</div>
		</section>
	);
}

export default NotFound;

