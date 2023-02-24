function FetchPrices({ fileType }) {
	return (
		<div>
			{
				(fileType = "text/plain" ? (
                    <button
                        type="button"
                        className="fetch-button"
                        onClick={() => null}
                    >
						Fetch Prices
					</button>
				) : (
					""
				))
			}
		</div>
	);
}

export default FetchPrices;
