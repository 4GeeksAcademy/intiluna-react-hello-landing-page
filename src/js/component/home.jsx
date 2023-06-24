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
				<div className="d-flex justify-content-center">
				<Card cardText="Content A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
				<Card cardText="Content B:Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."/>
				<Card cardText="Content C:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
				<Card cardText="Content D:Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."/>
				</div>

			</div>
			<div> <Footer/> </div>

		</div>

		
	);
};

export default Home;
