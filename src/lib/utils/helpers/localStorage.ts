import { GetRecordResponseItem } from "../../schemas/api/retrieve";

const RECORDS_KEY = "records";

export const getRecordsFromLocalStorage = (): GetRecordResponseItem[] =>
  JSON.parse(window.localStorage.getItem(RECORDS_KEY) || "[]");

export const setRecordsToLocalStorage = (data: GetRecordResponseItem[]) => {
  window.localStorage.setItem(RECORDS_KEY, JSON.stringify(data));
};
