import { useState, useEffect } from "react";

import DropBox from "./DropBox";
import Files from "./Files";

function Upload() {
	const [fileName, setFileName] = useState("No file uploaded");
	const [fileData, setFileData] = useState("");
	const [fileType, setFileType] = useState("");
	const [fileIcon, setFileIcon] = useState("missing");

	useEffect(() => {
		console.log(fileData);
	}, [fileData]);

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

	function removeFile() {
		setFileName("No file uploaded");
		setFileData("");
		setFileType("");
		setFileIcon("missing");
	}

	return (
		<main className="upload--container">
			<h1>Drop file into box below</h1>
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
		</main>
	);
}

export default Upload;
