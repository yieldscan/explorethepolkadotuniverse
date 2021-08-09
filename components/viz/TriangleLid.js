import React from "react";
import { Spring, animated } from "@react-spring/konva";

const TriangleLid = ({
	x1,
	y1,
	x2,
	y2,
	duration,
	hexagonRadius,
	angle,
	theta,
}) => {
	return (
		<Spring
			native
			reset={true}
			config={{ duration: duration }}
			from={{
				x:
					x2 +
					hexagonRadius *
						Math.tan(30 * 0.0174533) *
						Math.cos((angle - theta) * 0.0174533),
				y:
					y2 +
					hexagonRadius *
						Math.tan(30 * 0.0174533) *
						Math.sin((angle - theta) * 0.0174533),
				shadowBlur: 0,
			}}
			to={{
				x:
					x1 +
					hexagonRadius *
						Math.tan(30 * 0.0174533) *
						Math.cos((angle - theta) * 0.0174533),
				y:
					y1 +
					hexagonRadius *
						Math.tan(30 * 0.0174533) *
						Math.sin((angle - theta) * 0.0174533),
				shadowBlur: 0,
				radius: 20 * Math.tan(30 * 0.0174533),
				opacity: 1,
			}}
		>
			{(props) => (
				<animated.RegularPolygon
					{...props}
					rotation={30 + (angle - theta)}
					sides={3}
					radius={hexagonRadius * Math.tan(30 * 0.0174533)}
					fill="#3EB9F0"
				/>
			)}
		</Spring>
	);
};
export default TriangleLid;
