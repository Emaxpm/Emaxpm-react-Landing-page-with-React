import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const CardProperties = [

		{ title: "First Title", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, omnis quibusdam! Modi excepturi officiis pariatur eum perspiciatis earum, eligendi alias facere! Autem nam ipsa magni? Magni facere optio blanditiis repellendus.", image: "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg" },

		{ title: "Second Title", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis vel, voluptates modi nemo optio inventore sunt rerum cupiditate delectus maiores tenetur ipsam temporibus. Aspernatur natus ipsa vero esse ex vel?", image: "https://technocio.com/wp-content/uploads/2021/01/Ranger-Raptor.jpg" },

		{ title: "Third Title", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, delectus voluptates iste dolorem neque maiores obcaecati a itaque sunt eveniet?", image: "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg" },

		{ title: "Fourth Title", paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga nesciunt sequi ea iste id minus dolore? Eligendi, delectus reprehenderit?", image: "https://technocio.com/wp-content/uploads/2021/01/Ranger-Raptor.jpg" }

	]

	return (

		<div>

			<Navbar />

			<div className="container">

				<Jumbotron />

				<div className="d-flex justify-content-center w-100 mt-5">
					{CardProperties.map((card, index) => {
						return (<Card title={card.title} paragraph={card.paragraph} image={card.image} key={index} />)
					})}

				</div>

			</div>

			<div className="Footer bg-dark text-light text-center py-4 position-absolute bottom-0 w-100">

				<cite>CopyRight © Your Website 2019</cite>

			</div>

		</div>
	);
};

export default Home;