import { utils, writeFile } from "xlsx";

function ExportExcel({ excelData, checkDate }) {
	function exportToExcel() {
		let wb = utils.book_new();
		let ws = utils.json_to_sheet(excelData);
		utils.book_append_sheet(wb, ws, checkDate);
		writeFile(wb, `Stock Data: (${checkDate}).xlsx`);
	}

	return (
		<div>
			<button type="button" onClick={exportToExcel}>
				Export Excel
			</button>
		</div>
	);
}

export default ExportExcel;
