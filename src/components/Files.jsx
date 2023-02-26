function Files({ fileName, fileData, fileType, fileIcon, removeFile }) {
	let styles = "";
	let message = "";

	let tickers = fileData.length;
	let totalTimeInSecs = 1.5 * tickers;
	let minutes = Math.floor(totalTimeInSecs / 60);
	let seconds = Math.floor(totalTimeInSecs % 60);

	minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
	seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

	if (fileIcon === "correct") {
		message = `Total Tickers: ${tickers} || Time To Process: ${minutes}:${seconds}`;
		styles = {
			backgroundColor: "#77dd77",
		};
	} else if (fileIcon === "wrong") {
		message = "Wrong file type; please upload a .txt file.";
		styles = {
			backgroundColor: "#FF6D6A",
		};
	} else {
		message = "";
		styles = {
			backgroundColor: "lightgrey",
		};
	}

	return (
		<div className="files--container">
			<div className="file-upload-wrapper" style={styles}>
				<img
					src={`../assets/${fileIcon}-file.png`}
					className="text-file-icon"
				/>
				<div>
					<p className="file-name">{fileName}</p>
					{fileType ? <p className="file-type">type: {fileType}</p> : ""}
				</div>
				{fileName !== "No file uploaded" ? (
					<img
						src="../assets/close-icon.png"
						className="close-icon"
						onClick={removeFile}
					/>
				) : (
					""
				)}
			</div>
			<p className="alert-message">{message}</p>
		</div>
	);
}

export default Files;
