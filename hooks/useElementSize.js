import { useState, useCallback, useEffect } from "react";
import useEventListener from "./useEventListener";

function useElementSize(elementRef) {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	// Prevent too many rendering using useCallback
	const updateSize = useCallback(() => {
		const node = elementRef?.current;
		if (node) {
			console.log(node.offsetWidth);
			console.log(node.offsetHeight);
			setSize({
				width: node.offsetWidth || 0,
				height: node.offsetHeight || 0,
			});
		}
	}, [elementRef]);

	useEffect(() => {
		updateSize();
	}, []);
	useEventListener("resize", updateSize);
	return size;
}

export default useElementSize;
