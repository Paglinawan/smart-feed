import { API_KEY } from "../config/setting";

export const translateTitle = (title: string) => {
  const apiBaseUrl = "https://api-free.deepl.com/v2/translate?auth_key=";
  const lang = "JA";
  const encodedTitle = encodeURIComponent(title.toString());
  const apiUrl =
    apiBaseUrl + API_KEY + "&text=" + encodedTitle + "&target_lang=" + lang;
  const response = UrlFetchApp.fetch(apiUrl).getContentText();
  const translatedText = JSON.parse(response).translations[0].text;
  return translatedText;
};
