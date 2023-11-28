/* eslint-disable prettier/prettier */

"use client";

import ContentCard from "./contentCard";
import { GetRecordsResponse } from "../../../lib/schemas/api/retrieve";

type RecordsListProps = {
  data: GetRecordsResponse;
};

const RecordsList = ({ data }: RecordsListProps) => (
  <div className="bg-white rounded-lg border border-gray-200 h-full overflow-y-auto pb-24 p-4 w-full">
    {Object.entries(data.list).length ? (
      <div className="space-y-3">
        {Object.entries(data.list)
          .sort(
            ([, a], [, b]) =>
              parseInt(b.time_added, 10) - parseInt(a.time_added, 10),
          )
          .map((record) => {
            const i = record[1];

            return <ContentCard data={i} key={i.item_id} />;
          })}
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center mt-24">
        <h3 className="font-semibold text-lg text-slate-700">Your pocket is empty!</h3>
        <p className="text-sm text-slate-600">Begin saving your fantastic internet finds.</p>
      </div>
    )}
  </div>
);

export default RecordsList;
