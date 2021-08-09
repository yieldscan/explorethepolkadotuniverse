import React from "react";
import { Line } from "react-konva";

const Tail = ({ x, y, angle, opacity }) => {
	return (
		<React.Fragment>
			<Line
				x={x}
				y={y}
				points={[3, 60, 3, 6]}
				tension={0}
				stroke={"#717171"}
				rotation={angle}
				opacity={opacity}
			/>
		</React.Fragment>
	);
};

export default Tail;
