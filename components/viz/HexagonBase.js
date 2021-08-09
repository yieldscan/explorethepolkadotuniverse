import React from "react";
import { Spring, animated } from "@react-spring/konva";

const HexagonBase = ({ x1, y1, x2, y2, duration, hexagonRadius, angle }) => {
	return (
		<Spring
			native
			reset={true}
			config={{ duration: duration }}
			from={{
				x: x2,
				y: y2,
				shadowBlur: 0,
			}}
			to={{
				x: x1,
				y: y1,
				shadowBlur: 5,
				radius: hexagonRadius,
			}}
		>
			{(props) => (
				<animated.RegularPolygon
					{...props}
					rotation={angle}
					sides={6}
					fill="#F0753E"
				/>
			)}
		</Spring>
	);
};
export default HexagonBase;
