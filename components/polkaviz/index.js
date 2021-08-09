import { useRef } from "react";
import useElementSize from "../../hooks/useElementSize";

import Viz from "../viz";

const PolkaViz = () => {
	// const [stageHeight, setStageHeight] = useState(null);
	// const [stageWidth, setStageWidth] = useState(null);
	const stageCanvasRef = useRef(null);

	const { width, height } = useElementSize(stageCanvasRef);

	console.log(width, height);
	// console.log(stageWidth);
	return (
		<main
			className="flex items-center justify-center w-full h-full flex-1 text-center "
			ref={stageCanvasRef}
		>
			<Viz stageHeight={height} stageWidth={width} />
		</main>
	);
};
export default PolkaViz;
