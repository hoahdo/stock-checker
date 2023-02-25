import { useState, useEffect } from "react";
import { finnhubClient } from "react-finnhub";
import { dateToUnixTime, hoursToSecs } from "./utils";

const apiKey = import.meta.env.VITE_API_KEY;
const client = finnhubClient(apiKey);

function FetchPrices({ fileType, fileData, checkDate }) {
	const [stockData, setStockData] = useState([{}]);

	/////////////////////////////////////////////////////////////////////////////




	// useEffect(() => {
	// 	getStockPrice();
	// 	console.log(stockData);
	// }, [fileData, checkDate]);

	async function getStockPrice() {
		let timeFrom = dateToUnixTime(checkDate) + hoursToSecs(8);
		let timeTo = dateToUnixTime(checkDate) + hoursToSecs(20);
        const tickerInfo = fileData.map(async (ticker, index) => {
            
            await new Promise(resolve => setTimeout(resolve,1250*index))
            
            const res = await client.stockCandles(ticker, "D", timeFrom, timeTo);
            
			const data = {
                ticker,
				high: res ? res.data.h[0] : NaN,
				low: res ? res.data.l[0] : NaN,
			};
            

			console.log(data);
            return data
		});
		const infos = await Promise.allSettled(tickerInfo);

		setStockData(infos);
	}
    console.log(stockData)




	/////////////////////////////////////////////////////////////////////////////

	// const getStockPrice = () => {
	// 	let arr = [...fileData];
	// 	arr.map((symbol) => {
	// 		client.stockCandles(symbol, "D", timeFrom, timeTo).then((res) => {
	// 			return {
	// 				ticker: symbol,
	// 				high: res.data.h[0],
	// 				low: res.data.l[0],
	// 			};
	// 		});
	// 	});
	// };

	// const StockTickers = fileData.map((ticker, index) => {
	//     return (
	//         <p key={index}>{ticker}</p>
	//     )
	// })

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
			{/* {StockTickers} */}
		</div>
	);
}

export default FetchPrices;
