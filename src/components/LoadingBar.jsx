import { useState, useEffect } from "react";

function LoadingBar({ loading, fileData }) {
	const [percent, setPercent] = useState(0);

	const dataLength = fileData.length;
	const increments = Number((1 / dataLength) * 100).toFixed(0);

	useEffect(() => {
		if (percent < 100 && loading) {
			setTimeout(
				() => setPercent((prev) => (prev = prev + Number(increments))),
				1250
			);
		}
	}, [percent, loading]);

	const styles = {
		backgroundColor: "#a5d1e6",
		borderRadius: "7px",
		height: "100%",
		width: `${percent}%`,
		transition: "width 0.5s",
	};

	return (
		<div>
			<div className="loading-container">
				<p className="loading-label">LOADING . . .</p>
				<p className="loading-percent">{percent}%</p>
			</div>
			<div className="loading-bar">
				<div style={styles}></div>
			</div>
		</div>
	);
}

export default LoadingBar;
