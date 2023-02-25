import { formatFileTickers } from "./utils";

function DropBox({
	updateFileName,
	updateFileData,
	updateFileType,
	updateFileIcon,
}) {
	function handleDragEnter(event) {
		const dropbox = document.getElementById("dropbox");
		dropbox.classList.add("upload-field-hover");
		event.preventDefault();
	}

	function handleDragLeave(event) {
		const dropbox = document.getElementById("dropbox");
		dropbox.classList.remove("upload-field-hover");
		event.preventDefault();
	}

	function handleDragOver(event) {
		const dropbox = document.getElementById("dropbox");
		dropbox.classList.add("upload-field-hover");
		event.preventDefault();
	}

	function handleDrop(event) {
		const dropbox = document.getElementById("dropbox");
		dropbox.classList.remove("upload-field-hover");
		const file = event.dataTransfer.files[0];
		readUploadedFile(file);
		event.preventDefault();
	}

	function uploadFile(event) {
		const file = event.target.files[0];
		readUploadedFile(file);
	}

	function readUploadedFile(file) {
		let readFile = new FileReader();
		updateFileName(file.name);
		updateFileType(file.type);
		if (file.type === "text/plain") {
			updateFileIcon("correct");
			readFile.readAsText(file);
			readFile.onload = () => {
				const tickers = readFile.result;
				const formattedTickers = formatFileTickers(tickers);
				updateFileData(formattedTickers);
			};
			readFile.onerror = () => console.log(readFile.error);
		} else {
			updateFileIcon("wrong");
			updateFileData([]);
		}
	}

	return (
		<form
			id="dropbox"
			className="upload-field"
			onDragEnter={(event) => handleDragEnter(event)}
			onDragLeave={(event) => handleDragLeave(event)}
			onDragOver={(event) => handleDragOver(event)}
			onDrop={(event) => handleDrop(event)}
		>
			<img src="../assets/upload-icon.png" className="upload-icon" />
			<p>Drag and drop files here</p>
			<div className="upload-or-container">
				<hr />
				<p>OR</p>
				<hr />
			</div>
			<button
				className="upload-button"
				type="button"
				onClick={() => document.getElementById("file-upload").click()}
			>
				Browse Files
			</button>
			<input
				id="file-upload"
				type="file"
				accept=".txt"
				hidden={true}
				onChange={(event) => uploadFile(event)}
			/>
		</form>
	);
}

export default DropBox;
