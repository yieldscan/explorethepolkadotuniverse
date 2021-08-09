import React from "react";
import HexagonBase from "./HexagonBase";
import TriangleLid from "./TriangleLid";

const BlockAnimation = ({ x1, y1, x2, y2, angle, theta }) => {
	const hexagonRadius = 6;
	const duration = 1500;
	return (
		<React.Fragment>
			<HexagonBase
				x1={x1}
				x2={x2}
				y1={y1}
				y2={y2}
				angle={angle}
				hexagonRadius={hexagonRadius}
				duration={duration}
			/>
			<TriangleLid
				x1={x1}
				x2={x2}
				y1={y1}
				y2={y2}
				angle={angle}
				hexagonRadius={hexagonRadius}
				theta={60}
				duration={duration}
			/>
			<TriangleLid
				x1={x1}
				x2={x2}
				y1={y1}
				y2={y2}
				angle={angle}
				hexagonRadius={hexagonRadius}
				theta={120}
				duration={duration}
			/>
		</React.Fragment>
	);
};
export default BlockAnimation;
