import React from "react";
import Card from "../component/card.jsx"
import Navbar from "../component/navbar.jsx"
import Jumbotron from "../component/jumbotron.jsx"
import Footer from "../component/footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div>
			<div><Navbar/> </div>
			<div> <Jumbotron/> </div>
			<div className="text-center">
				<div className="d-flex justify-content-between">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				</div>

			</div>
			<div> <Footer/> </div>

		</div>

		
	);
};

export default Home;
