import { utils, writeFile } from "xlsx";

function ExportExcel({ excelData, checkDate }) {
	function exportToExcel() {
		let workbook = utils.book_new();
		let worksheet = utils.json_to_sheet(excelData);
		utils.book_append_sheet(workbook, worksheet, checkDate);
		utils.sheet_add_aoa(worksheet, [["TICKER", "HIGH", "LOW"]], {
			origin: "A1",
		});
		writeFile(workbook, `Stock_Data_(${checkDate}).xlsx`);
	}

	return (
		<div>
			<button type="button" className="export-button" onClick={exportToExcel}>
				Export to Excel
			</button>
		</div>
	);
}

export default ExportExcel;
