import { translateTitle } from "../deepl";

export const doArchive = (sourceSheetName: string, targetSheetName: string) => {
  const sourceSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);
  const targetSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);
  if (targetSheet === null || sourceSheet === null) return;

  const sourceData = sourceSheet.getDataRange().getValues();

  let targetData = [];
  let rowsToDelete = [];
  for (let i = 0; i < sourceData.length; i++) {
    if (sourceData[i][7] === true) {
      targetData.push(sourceData[i]);
      rowsToDelete.push(i + 1);
    }
  }

  if (targetData.length > 0) {
    const lastRow = targetSheet.getLastRow();
    targetSheet
      .getRange(lastRow + 1, 1, targetData.length, targetData[0].length)
      .setValues(targetData);
  }

  for (let j = rowsToDelete.length - 1; j >= 0; j--) {
    sourceSheet.deleteRow(rowsToDelete[j]);
  }
};

export const removeRow = (sheetName: string) => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (sheet === null) return;
  const lastRow = sheet.getLastRow();
  const range = sheet.getRange("I1:I" + lastRow);
  const values = range.getValues();

  for (let i = lastRow; i > 0; i--) {
    if (values[i - 1][0] === true) {
      sheet.deleteRow(i);
    }
  }
};

export const fetchAndWriteToSheet = (
  jsonFeedUrl: string,
  sheetName: string,
  isEn: boolean
) => {
  const response = UrlFetchApp.fetch(jsonFeedUrl);
  const jsonData = JSON.parse(response.getContentText());
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (sheet === null) return;

  for (var i = 0; i < jsonData.items.length; i++) {
    const appendRow = sheet.getLastRow() + 1;
    const item = jsonData.items[i];
    const datePublished = new Date(item.date_published);
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysAgo = new Date(Date.now() - 2 * msPerDay);

    if (datePublished >= daysAgo) {
      const date = Utilities.formatDate(
        datePublished,
        Session.getScriptTimeZone(),
        "MM/dd"
      );
      const url = item.url;
      const title = isEn ? translateTitle(item.title) : item.title;
      const domain = `=REGEXREPLACE($C${appendRow}, "https?:\\/\\/(?:www\\.)?(.*?)\\..*", "$1")`;
      const heading = `=HYPERLINK($C${appendRow}, $B${appendRow})`;
      sheet.appendRow([date, title, url, domain, heading]);
      sheet
        .getRange(appendRow, 1, 1, sheet.getLastColumn())
        .setBorder(
          true,
          false,
          false,
          false,
          false,
          false,
          "#cccccc",
          SpreadsheetApp.BorderStyle.DASHED
        );
    }
  }
};
