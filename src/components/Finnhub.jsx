function Finnhub({ stockData }) {
	const stockItems = stockData.map((item, key) => {
		const { ticker, high, low } = item.value;
		return (
			<div key={key} className="stock-item">
				<p>{ticker}</p>
				<p>{high}</p>
				<p>{low}</p>
			</div>
		);
	});

	return (
		<div>
			<div className="stock-items-container">{stockItems}</div>
		</div>
	);
}

export default Finnhub;
