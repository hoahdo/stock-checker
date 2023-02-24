import { useState, useEffect } from "react";
import SetDate from "./SetDate";
import DropBox from "./DropBox";
import Files from "./Files";
import FetchPrices from "./FetchPrices";
import { getCurrentDate } from "./utils";

function Upload() {
	const [fileName, setFileName] = useState("No file uploaded");
	const [fileData, setFileData] = useState("");
	const [fileType, setFileType] = useState("");
	const [fileIcon, setFileIcon] = useState("missing");
	const [checkDate, setCheckDate] = useState(() => getCurrentDate());

	function updateFileName(newFileName) {
		setFileName(newFileName);
	}

	function updateFileData(newFileData) {
		setFileData(newFileData);
	}

	function updateFileType(newFileType) {
		setFileType(newFileType);
	}

	function updateFileIcon(newFileIcon) {
		setFileIcon(newFileIcon);
	}

	function updateCheckDate(event) {
		const { value } = event.target;
		setCheckDate(value);
	}

	function removeFile() {
		setFileName("No file uploaded");
		setFileData("");
		setFileType("");
		setFileIcon("missing");
	}

	return (
		<main className="upload--container">
			<SetDate defaultDate={checkDate} updateCheckDate={updateCheckDate} />
			<DropBox
				updateFileName={updateFileName}
				updateFileData={updateFileData}
				updateFileType={updateFileType}
				updateFileIcon={updateFileIcon}
			/>
			<Files
				fileName={fileName}
				fileData={fileData}
				fileType={fileType}
				fileIcon={fileIcon}
				removeFile={removeFile}
			/>
			{fileType === "text/plain" ? (
				<FetchPrices
					fileType={fileType}
					fileData={fileData}
					checkDate={checkDate}
				/>
			) : (
				""
			)}
		</main>
	);
}

export default Upload;
