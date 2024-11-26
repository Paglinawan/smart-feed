import { doArchive, removeRow, fetchAndWriteToSheet } from "../sheet";
import {
  JSON_WORLD_NEWS,
  JSON_JAPAN_NEWS,
  JSON_WORLD_DEVELOP,
  JSON_JAPAN_DEVELOP,
  JSON_WORLD_DESIGN,
  JSON_JAPAN_DESIGN,
  JSON_PSYCHOLOGY,
  JSON_COLLEGE,
  SHEET_NEWS,
  SHEET_DEVELOP,
  SHEET_DESIGN,
  SHEET_PSYCHOLOGY,
  SHEET_COLLEGE,
  ARCHIVE_SHEET_DEVELOP,
  ARCHIVE_SHEET_DESIGN,
  ARCHIVE_SHEET_PSYCHOLOGY,
} from "../config/setting";

function doMorning() {
  removeRow(SHEET_NEWS);
  removeRow(SHEET_DEVELOP);
  removeRow(SHEET_DESIGN);
  removeRow(SHEET_PSYCHOLOGY);

  fetchAndWriteToSheet(JSON_WORLD_NEWS, SHEET_NEWS, true);
  fetchAndWriteToSheet(JSON_JAPAN_NEWS, SHEET_NEWS, true);

  fetchAndWriteToSheet(JSON_WORLD_DEVELOP, SHEET_DEVELOP, true);
  fetchAndWriteToSheet(JSON_JAPAN_DEVELOP, SHEET_DEVELOP, false);

  fetchAndWriteToSheet(JSON_WORLD_DESIGN, SHEET_DESIGN, true);
  fetchAndWriteToSheet(JSON_JAPAN_DESIGN, SHEET_DESIGN, false);

  fetchAndWriteToSheet(JSON_PSYCHOLOGY, SHEET_PSYCHOLOGY, true);
}
function doNoon() {
  removeRow(SHEET_NEWS);
  removeRow(SHEET_DEVELOP);
  removeRow(SHEET_DESIGN);
  removeRow(SHEET_PSYCHOLOGY);

  fetchAndWriteToSheet(JSON_JAPAN_NEWS, SHEET_NEWS, true);
}
function doEvening() {
  removeRow(SHEET_NEWS);
  removeRow(SHEET_DEVELOP);
  removeRow(SHEET_DESIGN);
  removeRow(SHEET_PSYCHOLOGY);

  fetchAndWriteToSheet(JSON_WORLD_NEWS, SHEET_NEWS, true);
  fetchAndWriteToSheet(JSON_JAPAN_NEWS, SHEET_NEWS, true);
}
function doWeekly() {
  fetchAndWriteToSheet(JSON_COLLEGE, SHEET_COLLEGE, true);
}
function doMonthly() {
  doArchive(SHEET_DEVELOP, ARCHIVE_SHEET_DEVELOP);
  doArchive(SHEET_DESIGN, ARCHIVE_SHEET_DESIGN);
  doArchive(SHEET_PSYCHOLOGY, ARCHIVE_SHEET_PSYCHOLOGY);
}

export const runMorning = () => doMorning();
export const runNoon = () => doNoon();
export const runEvening = () => doEvening();
export const runWeekly = () => doWeekly();
export const runMonthly = () => doMonthly();
