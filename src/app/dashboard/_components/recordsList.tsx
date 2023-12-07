/* eslint-disable prettier/prettier */

"use client";

import ContentCard from "./contentCard";
import SearchRecordDialog from "./searchRecordDialog";
import { getRecordsFromLocalStorage } from "../../../lib/utils/helpers/localStorage";

type RecordsListProps = {
  page: "archive" | "list" | "favorite";
};

const RecordsList = ({ page }: RecordsListProps) => {
  const data = getRecordsFromLocalStorage().filter((record) => {
    if (page === "favorite") {
      return record.favorite === "1" && record.status === "0"
    }

    if (page === "archive") {
      return record.status === "1"
    }

    if (page === "list") {
      return record.status === "0" && record.favorite === "0"
    }

    return record
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 h-full overflow-y-auto pb-24 p-4 w-full">
      <SearchRecordDialog data={data} />
      {data.map((record) => (
        <ContentCard data={record} key={record.item_id} page={page} />
      ))}
      {!data.length && (
        <div className="flex flex-col items-center justify-center mt-24">
          <h3 className="font-semibold text-lg text-slate-700">
            Your pocket is empty!
          </h3>
          <p className="text-sm text-slate-600">
            Begin saving your fantastic internet finds.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecordsList;
