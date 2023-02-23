function DropBox({ updateFileName, updateFileData, updateFileType }) {
	function handleDragEnter(event) {
		event.preventDefault();
	}

	function handleDragLeave(event) {
		event.preventDefault();
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	function handleDrop(event) {
		event.preventDefault();
		// console.log("File dropped");

		const file = event.dataTransfer.files[0];
		readUploadedFile(file);
	}

	function uploadFile(event) {
		const file = event.target.files[0];
		readUploadedFile(file);
	}

	function readUploadedFile(file) {
		let readFile = new FileReader();

		updateFileName(file.name);
		updateFileType(file.type);

		readFile.readAsText(file);

		readFile.onload = () => {
			updateFileData(readFile.result);
		};

		readFile.onerror = () => console.log(readFile.error);
	}

	return (
		<form
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
