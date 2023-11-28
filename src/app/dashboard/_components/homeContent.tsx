/* eslint-disable prettier/prettier */

"use client";

import ContentCard from "./contentCard";
import { GetRecordsResponse } from "../../../lib/schemas/api/retrieve";

type HomeContentProps = {
  data: GetRecordsResponse
}

const HomeContent = ({ data }: HomeContentProps) => (
  <div className="bg-white rounded-lg border border-gray-200 h-full overflow-y-auto pb-24 p-4 w-full">
    <div className="space-y-3">
      {Object.entries(data.list)
        .sort(
          ([, a], [, b]) =>
            parseInt(b.time_added, 10) - parseInt(a.time_added, 10),
        )
        .map((record) => {
          const i = record[1];

          return <ContentCard data={i} key={i.item_id} />;
        })
      }
    </div>
  </div>
);

export default HomeContent;
