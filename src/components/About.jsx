function About() {
	return (
		<div>
			<h2 className="about-title">How To Use</h2>
			<ol className="list-container">
				<li>
					Upload a plain text file with stock ticker symbols on each new line.
				</li>
				<li>Choose a date in the past from which to get stock data.</li>
				<li>Click 'Fetch Prices' to display the stock highs and lows.</li>
			</ol>
		</div>
	);
}

export default About;
