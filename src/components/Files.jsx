function Files({ fileName, fileData }) {
	return (
		<div>
			<span>
				<img src="../assets/txt-file-icon.png" className="text-file-icon" />
				<p>Files Uploaded: {fileName}</p>
				<img src="../assets/close-icon.png" className="close-icon" />
			</span>
			<p>Text Inside File:</p>
			<p>{fileData}</p>
		</div>
	);
}

export default Files;
