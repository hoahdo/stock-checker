function getCurrentDate() {
	const localDate = new Date();
	let year = localDate.getFullYear();
	let month = localDate.getMonth() + 1;
	let day = localDate.getDate();
	month.toString().length == 1 ? (month = `0${month}`) : (month = `${month}`);
	day.toString().length == 1 ? (day = `$0${day}`) : (day = `${day}`);
	let currentDate = `${year}-${month}-${day}`;
	return currentDate;
}

function dateToUnixTime(checkDate) {
	const dateArr = checkDate.split("-");
	const date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
	let unixTime = Math.floor(date.getTime() / 1000);
	return unixTime;
}

function hoursToSecs(hours) {
	hours = hours * 3600;
	return hours;
}

function formatFileTickers(tickers) {
	let tickersArr = tickers.split("\r\n");
	for (let i = 0; i < tickersArr.length; i++) {
        tickersArr[i] = tickersArr[i].trim();
        tickersArr[i] = tickersArr[i].toUpperCase();
	}
	tickersArr = tickersArr.filter((ticker) => ticker != "");
	return tickersArr;
}

export { getCurrentDate, dateToUnixTime, hoursToSecs, formatFileTickers };
