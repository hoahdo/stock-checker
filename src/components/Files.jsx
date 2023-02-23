function Files({ fileName, fileData, fileType, fileIcon, removeFile }) {
	let styles = "";
	let message = "";
	if (fileIcon === "correct") {
		message = "File successfully uploaded!";
		styles = {
			backgroundColor: "#77dd77",
		};
	} else if (fileIcon === "wrong") {
		message = "Please upload a .txt file.";
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
