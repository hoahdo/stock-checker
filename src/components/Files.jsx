function Files({ fileName, fileData, fileType, removeFile }) {
	return (
		<div className="files--container">
			<div className="file-upload-wrapper">
				<img src="../assets/txt-file-icon.png" className="text-file-icon" />
				<div>
					<p className="file-name">{fileName}</p>
					{fileType ? <p className="file-type">type: {fileType}</p> : ""}
				</div>
                {
                    (fileName !== "No file selected")
                    ?
					<img
						src="../assets/close-icon.png"
						className="close-icon"
						onClick={removeFile}
					/>
				    : 
					""
				}
			</div>
		</div>
	);
}

export default Files;
