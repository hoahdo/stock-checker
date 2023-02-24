// import Finnhub from "./Finnhub";
import { useState } from "react";
import { finnhubClient } from "react-finnhub";
import { dateToUnixTime, hoursToSecs } from "./utils";


// const client = finnhubClient(`${process.env.API_KEY}`);


function FetchPrices({ fileType, fileData, checkDate }) {
	const [stockData, setStockData] = useState();

    let timeFrom = dateToUnixTime(checkDate) + hoursToSecs(8)
    let timeTo = dateToUnixTime(checkDate) + hoursToSecs(20)

    // console.log(`From: ${timeFrom}`)
    // console.log(`To: ${timeTo}`)

	function getStockPrice() {
		client
			.stockCandles("AAPL","D",timeFrom,timeTo )
			.then((res) => console.log(res.data));
	}



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
			<p>{stockData}</p>
		</div>
	);
}

export default FetchPrices;
