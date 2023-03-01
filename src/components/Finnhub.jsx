import ExportExcel from "./ExportExcel";

function Finnhub({ stockData, excelData, checkDate }) {
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

	const tickerTitle = (
		<div className="stock-items-title">
			<p>TICKER</p>
			<p>HIGH</p>
			<p>LOW</p>
		</div>
	);

	return (
		<div>
			<div className="finnhub-container">
				<ExportExcel excelData={excelData} checkDate={checkDate} />
				{tickerTitle}
				<div>{stockItems}</div>
			</div>
		</div>
	);
}

export default Finnhub;
