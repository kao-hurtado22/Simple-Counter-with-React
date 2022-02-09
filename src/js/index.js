//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function simpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
simpleCounter.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

let Counter = 0;
setInterval(function () {
	const four = Math.floor(Counter / 1000);
	const three = Math.floor(Counter / 100);
	const two = Math.floor(Counter / 10);
	const one = Math.floor(Counter / 1);

	console.log(four, three, two, one);
	Counter++;

	ReactDOM.render(
		<simpleCounter
			digiOne={one}
			digiTwo={two}
			digiThree={three}
			digiFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
