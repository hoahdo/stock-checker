function Finnhub({ stockData }) {
	const stockItems = stockData.map((item, key) => {
		const { TICKER, HIGH, LOW } = item.value;
		return (
			<div key={key} className="stock-item">
				<p>{TICKER}</p>
				<p>{HIGH}</p>
				<p>{LOW}</p>
			</div>
		);
	});

	const tickerTitle = (
		<div className="stock-items-title">
			<p>TICKER</p>
			<p>HIGH</p>
			<p>LOW</p>
		</div>
	);

	return (
		<div className="finnhub-container">
			{tickerTitle}
			<div>{stockItems}</div>
		</div>
	);
}

export default Finnhub;
