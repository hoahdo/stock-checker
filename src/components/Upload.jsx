import { useState, useEffect } from "react";

import DropBox from "./DropBox";
import Files from "./Files";

function Upload() {
	const [fileName, setFileName] = useState("No file selected");
    const [fileData, setFileData] = useState("");
    const [fileType, setFileType] = useState("");

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
        setFileType(newFileType)
    }

    function removeFile() {
        setFileName("No file selected")
        setFileData("")
        setFileType("")
    }

	return (
		<main className="upload--container">
			<h1>Drop file into box below</h1>
			<DropBox
				updateFileName={updateFileName}
                updateFileData={updateFileData}
                updateFileType={updateFileType}
			/>
            <Files
                fileName={fileName}
                fileData={fileData}
                fileType={fileType}
                removeFile={ removeFile}    
            />
		</main>
	);
}

export default Upload;
