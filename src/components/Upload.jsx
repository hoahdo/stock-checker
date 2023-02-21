function Upload() {
	return (
		<div className="upload--container">
            <h1>Drop file into dropbox</h1>
            <form
                action=""
                className="upload-form"
                onClick={(e) => console.log(e.target)}
            >
                <input
                    type="file"
                    id="dropbox"
                    name="fileupload"
                    className="input-field" 
                    onClick={(e) => console.log(e.target)}
                />
                <input type="submit"/>
            </form>
		</div>
	);
}

export default Upload;


// https://css-tricks.com/drag-and-drop-file-uploading/
// https://www.youtube.com/watch?v=FtpN8QI9PuA
// https://www.youtube.com/watch?v=0HCiH4Tk04I
// https://design.gs.com/patterns/drag-and-drop