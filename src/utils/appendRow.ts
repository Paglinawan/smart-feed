export function appendRow(
  activeSheet: GoogleAppsScript.Spreadsheet.Sheet,
  rowIndex: GoogleAppsScript.Integer,
  columnIndex: GoogleAppsScript.Integer,
  rowData: object
) {
  const headers = activeSheet.getRange(1, 1, 1, columnIndex).getValues()[0];

  for (const [headerName, value] of Object.entries(rowData)) {
    const headerIndex = headers.indexOf(headerName) + 1;

    if (headerIndex === 0)
      throw new Error(`"${headerName}"の見出しが見当たりません。`);

    activeSheet.getRange(rowIndex, headerIndex).setValue(value);
  }
}
