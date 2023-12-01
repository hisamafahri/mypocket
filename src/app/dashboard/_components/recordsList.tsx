/* eslint-disable prettier/prettier */

"use client";

import { useQuery } from "@tanstack/react-query";
import ContentCard from "./contentCard";
import { postGetRecords } from "../../../lib/services/api/retrieve/client";
import { Icons } from "../../../components/ui/icons";
import SearchRecordDialog from "./searchRecordDialog";

type RecordsListProps = {
  page: "archive" | "list" | "favorite";
};

const RecordsList = ({ page }: RecordsListProps) => {
  const postGetRecordsQuery = useQuery({
    queryKey: ["postGetRecordsQuery", page],
    queryFn: async () =>
      postGetRecords({
        body: {
          consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
          offset: "0",
          count: "99999",
          state: page === "archive" ? "archive" : "unread",
          favorite: page === "favorite" ? 1 : 0,
          sort: "newest",
          detailType: "simple",
        },
      }),
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 h-full overflow-y-auto pb-24 p-4 w-full">
      <SearchRecordDialog
        data={
          postGetRecordsQuery.isSuccess
            ? Object.values(postGetRecordsQuery.data.list).sort(
              (a, b) =>
                parseInt(b.time_added, 10) - parseInt(a.time_added, 10),
            )
            : []
        }
      />
      {(postGetRecordsQuery.isLoading || postGetRecordsQuery.isFetching) && (
        <div className="flex items-center justify-center flex-col my-8">
          <Icons.Spinner className="h-5 w-5 text-slate-400 animate-spin" />
          <p className="text-slate-500 mt-2">Syncing...</p>
        </div>
      )}
      {postGetRecordsQuery.isSuccess && !postGetRecordsQuery.isFetching &&
        Object.entries(postGetRecordsQuery.data.list).length && (
          <div className="space-y-3">
            {Object.entries(postGetRecordsQuery.data.list)
              .sort(
                ([, a], [, b]) =>
                  parseInt(b.time_added, 10) - parseInt(a.time_added, 10),
              )
              .map((record) => {
                const i = record[1];

                return (
                  <ContentCard data={i} key={i.item_id} page={page} />
                );
              })}
          </div>
        )}{" "}
      {postGetRecordsQuery.isSuccess && !postGetRecordsQuery.isFetching &&
        Object.entries(postGetRecordsQuery.data.list).length === 0 && (
          <div className="flex flex-col items-center justify-center mt-24">
            <h3 className="font-semibold text-lg text-slate-700">
              Your pocket is empty!
            </h3>
            <p className="text-sm text-slate-600">
              Begin saving your fantastic internet finds.
            </p>
          </div>
        )}
      {postGetRecordsQuery.isError && (
        <div className="flex flex-col items-center justify-center mt-24">
          <h3 className="font-semibold text-lg text-slate-700">
            Something went wrong!
          </h3>
          <p className="text-sm text-slate-600">
            Failed to get your pocket data. Check console for more info!
          </p>
        </div>
      )}
    </div>
  );
};

export default RecordsList;
