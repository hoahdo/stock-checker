import CorrectFile from "../assets/correct-file.png";
import WrongFile from "../assets/wrong-file.png";
import MissingFile from "../assets/missing-file.png";
import CloseIcon from "../assets/close-icon.png";

function Files({ fileName, fileData, fileType, fileIcon, removeFile }) {
	let styles = "";
	let message = "";
	let image = "";

	let tickers = fileData.length;
	let totalTimeInSecs = 1.5 * tickers;
	let minutes = Math.floor(totalTimeInSecs / 60);
	let seconds = Math.floor(totalTimeInSecs % 60);

	minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
	seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

	if (fileIcon === "correct") {
		image = CorrectFile;
		message = `Total Tickers: ${tickers} || Time To Process: ${minutes}:${seconds}`;
		styles = {
			backgroundColor: "#77dd77",
		};
	} else if (fileIcon === "wrong") {
		image = WrongFile;
		message = "Wrong file type; please upload a .txt file.";
		styles = {
			backgroundColor: "#FF6D6A",
		};
	} else {
		image = MissingFile;
		message = "";
		styles = {
			backgroundColor: "lightgrey",
		};
	}

	return (
		<div className="files--container">
			<div className="file-upload-wrapper" style={styles}>
				<img src={image} className="text-file-icon" />
				<div>
					<p className="file-name">{fileName}</p>
					{fileType ? <p className="file-type">type: {fileType}</p> : ""}
				</div>
				{fileName !== "No file uploaded" ? (
					<img src={CloseIcon} className="close-icon" onClick={removeFile} />
				) : (
					""
				)}
			</div>
			<p className="alert-message">{message}</p>
		</div>
	);
}

export default Files;
