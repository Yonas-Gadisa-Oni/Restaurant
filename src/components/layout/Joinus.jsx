import "../style/Joinus.css";

function Joinus() {
	return (
		<section className="joinus">
			<div className="joinus-container">
				<div className="joinus-content">
					<p className="joinus-eyebrow">STAY CONNECTED</p>
					<h2 className="joinus-title">
						Be the First to Know
					</h2>
					<p className="joinus-description">
						Receive updates on seasonal menus, exclusive events, and special
						offerings from Maison Élian.
					</p>
					<form
						className="joinus-form"
						onSubmit={(e) => {
							e.preventDefault();
							const form = e.target;
							const input = form.querySelector("input");
							if (input.value.trim()) {
								form.classList.add("joinus-form-success");
								input.value = "";
								setTimeout(() => form.classList.remove("joinus-form-success"), 3000);
							}
						}}
					>
						<div className="joinus-input-wrapper">
							<input
								type="email"
								className="joinus-input"
								placeholder="Your email address"
								required
								aria-label="Email address"
							/>
							<button type="submit" className="joinus-button">
								SUBSCRIBE
							</button>
						</div>
						<p className="joinus-success-message">
							Thank you for subscribing!
						</p>
					</form>
					<p className="joinus-note">
						No spam, ever. Unsubscribe anytime.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Joinus;