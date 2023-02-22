import { useState, useEffect } from "react";

import DropBox from "./DropBox";
import Files from "./Files";

function Upload() {
	const [fileName, setFileName] = useState("No files selected");
	const [fileData, setFileData] = useState("");

	useEffect(() => {
		console.log(fileData);
	}, [fileData]);

	function updateFileName(newFileName) {
		setFileName(newFileName);
	}

	function updateFileData(newFileData) {
		setFileData(newFileData);
	}

	return (
		<div className="upload--container">
			<h1>Drop file into box below</h1>
			<DropBox
				updateFileName={updateFileName}
				updateFileData={updateFileData}
			/>
			<Files fileName={fileName} fileData={fileData} />
		</div>
	);
}

export default Upload;
