import React from "react";
import Rectangle from "./Rectangle";
import Tail from "./Tail";

const Validator = ({ x, y, angle }) => {
	let x1 = x;
	let y1 = y;
	let x2 = x;
	let y2 = y;
	let color = "#C31169";
	let opacity = 1;

	return (
		<React.Fragment>
			<Tail x={x2 / 2} y={y2 / 2} angle={angle} opacity={opacity} />
			<Rectangle x={x1 / 2} y={y1 / 2} angle={angle} color={color} />
		</React.Fragment>
	);
};

export default Validator;
