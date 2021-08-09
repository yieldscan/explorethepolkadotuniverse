import React, { useState } from "react";
import { Rect, Text } from "react-konva";

const Rectangle = ({ x, y, angle, color }) => {
	return (
		<React.Fragment>
			<Rect
				x={x}
				y={y}
				width={5}
				height={10}
				fill={color}
				cornerRadius={4.69457}
				rotation={angle}
				onMouseOver={(e) => {
					e.target.setAttrs({
						scaleX: 1.4,
						scaleY: 1.4,
					});
					document.body.style.cursor = "pointer";
				}}
				onMouseOut={(e) => {
					e.target.setAttrs({
						scaleX: 1,
						scaleY: 1,
					});
					document.body.style.cursor = "default";
				}}
			/>
		</React.Fragment>
	);
};

export default Rectangle;
