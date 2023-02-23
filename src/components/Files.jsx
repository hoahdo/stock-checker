function Files({ fileName, fileData, removeFile }) {
	return (
		<div className="files--container">
			<div className="file-upload-wrapper">
				<img src="../assets/txt-file-icon.png" className="text-file-icon" />
				<p className="file-name">{fileName}</p>
                <img
                    src="../assets/close-icon.png"
                    className="close-icon" 
                    onClick={removeFile}    
                />
			</div>
			{/* <p>Text Inside File:</p>
			<p>{fileData}</p> */}
		</div>
	);
}

export default Files;
