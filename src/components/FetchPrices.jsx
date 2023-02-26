import { useState, useEffect } from "react";
import { finnhubClient } from "react-finnhub";
import { dateToUnixTime, hoursToSecs } from "./utils";

const apiKey = import.meta.env.VITE_API_KEY;
const client = finnhubClient(apiKey);

function FetchPrices({ fileType, fileData, checkDate }) {
	const [stockData, setStockData] = useState();
	const [dataFetched, setDataFetched] = useState(false);
	/////////////////////////////////////////////////////////////////////////////

	// console.log(stockData)

	// useEffect(() => {
	//     if (dataFetched) {
	//         StockTickers()
	//         console.log("effect ran");
	//     }
	// }, [stockData]);

	async function getStockPrice() {
		let timeFrom = dateToUnixTime(checkDate) + hoursToSecs(8);
		let timeTo = dateToUnixTime(checkDate) + hoursToSecs(20);
		const tickerInfo = fileData.map(async (ticker, index) => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 1250 * index));
				const res = await client.stockCandles(ticker, "D", timeFrom, timeTo);
				const data = {
					ticker,
					high: res ? res.data.h[0] : NaN,
					low: res ? res.data.l[0] : NaN,
				};
				return data;
			} catch (error) {
				const data = {
					ticker,
					high: NaN,
					low: NaN,
				};
				return data;
			}
		});
		const infos = await Promise.allSettled(tickerInfo);
		setStockData(infos);
		// setDataFetched(true);
	}
	console.log(stockData);

	/////////////////////////////////////////////////////////////////////////////

	const StockTickers = () =>
		stockData.map((item, index) => {
			const { ticker, high, low } = item.value;
			return (
				<div>
					<p>Symbol: {ticker}</p>
					<p>High: ${high}</p>
					<p>Low: ${low}</p>
				</div>
			);
		});

	return (
		<div>
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
			<p>Below This Line</p>
		</div>
	);
}

export default FetchPrices;
