import React from "react";
import { Circle } from "react-konva";

const Relay = ({ x, y, isKusama = false }) => {
	let fillcolor = "#1a202c";
	let strokecolor = "#97A1BF";

	return (
		<Circle
			x={x / 2}
			y={y / 2}
			radius={190}
			fill={fillcolor}
			stroke={strokecolor}
			strokeWidth={4}
		/>
	);
};

export default Relay;
