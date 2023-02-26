import { useState, useEffect } from "react";
import Finnhub from "./Finnhub";
import { finnhubClient } from "react-finnhub";
import { dateToUnixTime, hoursToSecs } from "./utils";

const apiKey = import.meta.env.VITE_API_KEY;
const client = finnhubClient(apiKey);

function FetchPrices({ fileType, fileData, checkDate }) {
	const [stockData, setStockData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setStockData([]);
	}, [fileData, checkDate]);

	async function getStockPrice() {
		setStockData([]);
		setLoading(true);
		let timeFrom = dateToUnixTime(checkDate) + hoursToSecs(8);
		let timeTo = dateToUnixTime(checkDate) + hoursToSecs(20);
		const tickerInfo = fileData.map(async (ticker, index) => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 1250 * index));
				const res = await client.stockCandles(ticker, "D", timeFrom, timeTo);
				const data = {
					ticker,
					high: res.data.h[0].toFixed(2),
					low: res.data.l[0].toFixed(2),
				};
				console.log(data);
				return data;
			} catch (error) {
				const data = {
					ticker,
					high: "NaN",
					low: "NaN",
				};
				console.log(data);
				return data;
			}
		});
		const infos = await Promise.allSettled(tickerInfo);
		setStockData(infos);
		setLoading(false);
	}

	return (
		<div className="fetch-prices-container">
			{
				(fileType = "text/plain" ? (
					<button
						type="button"
						className="fetch-button"
						onClick={getStockPrice}
					>
						Fetch Prices
					</button>
				) : (
					""
				))
			}
			{loading ? <p className="processing-label">Processing. . .</p> : ""}
			{stockData.length > 0 ? <Finnhub stockData={stockData} /> : ""}
		</div>
	);
}

export default FetchPrices;
