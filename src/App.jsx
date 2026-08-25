import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Room from "./components/layout/Room";
import Menu from "./components/layout/menu";
import Chef from "./components/layout/chef";
import Exprience from "./components/layout/Exprience";
import AboutUs from "./components/layout/AboutUs";
import Gallery from "./components/layout/Gallay";
import Joinus from "./components/layout/Joinus";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
            <Room />
            <Menu />
            <Chef />
            <Exprience />
			<AboutUs />
			<Gallery />
			<Joinus />			
			<Footer />
		</>
	);
}

export default App;
