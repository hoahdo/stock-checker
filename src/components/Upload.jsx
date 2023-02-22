import { useState, useEffect } from "react";

function Upload() {
    const [fileName, setFileName] = useState("No files selected");
    const [fileData, setFileData] = useState("");
    
    useEffect(() => {
        console.log(fileData)
    }, [fileData])

    function uploadFile(event) {
        const file = event.target.files[0];
        let readFile = new FileReader();
        setFileName(file.name)

        readFile.readAsText(file)

        readFile.onload = () => {
            setFileData(readFile.result)
        }

    
        readFile.onerror = () => console.log(readFile.error)

    }

	return (
		<div className="upload--container">
			<h1>Drop file into box below</h1>
            <form    
                className="upload-field"
                onDragOver={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                    console.log(event.dataTransfer.files)
                }}
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
            <div>
                <span>
                    <img src="../assets/txt-file-icon.png" className="text-file-icon" />
                    <p>Files Uploaded: {fileName}</p>
                    <img src="../assets/close-icon.png" className="close-icon"/>
                </span>
                <p>Text Inside File:</p>
                <p>{fileData}</p>
            </div>
		</div>
	);
}

export default Upload;

// https://css-tricks.com/drag-and-drop-file-uploading/
// https://www.youtube.com/watch?v=FtpN8QI9PuA
// https://www.youtube.com/watch?v=0HCiH4Tk04I
// https://design.gs.com/patterns/drag-and-drop
// https://www.youtube.com/watch?v=Aoz0eQAbEUo
