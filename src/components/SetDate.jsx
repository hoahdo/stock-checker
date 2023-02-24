function SetDate({ defaultDate, updateCheckDate }) {
	
	return (
		<div className="date--container">
			<label htmlFor="date" className="date-label">Set the Date</label>
			<input
				id="date"
                type="date"
                className="date-form"
				value={defaultDate}
				onChange={(event) => updateCheckDate(event)}
			/>
		</div>
	);
}

export default SetDate;
