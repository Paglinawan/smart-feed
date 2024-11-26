import { runMorning, runNoon, runEvening, runWeekly, runMonthly } from "./main";

declare const global: {
  [x: string]: unknown;
};

global.runMorning = runMorning;
global.runNoon = runNoon;
global.runEvening = runEvening;
global.runWeekly = runWeekly;
global.runMonthly = runMonthly;
