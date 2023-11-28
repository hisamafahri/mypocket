/* eslint-disable prettier/prettier */

"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { postGetRecords } from "../../../lib/services/api/retrieve/client";
import WEB_ENV from "../../../lib/utils/helpers/env";
import { Button } from "../../../components/ui/button";
import ContentCard from "./contentCard";
import { Icons } from "../../../components/ui/icons";

const HomeContent = () => {
  const postGetRecordsQuery = useInfiniteQuery({
    queryKey: ["postGetRecordsQuery"],
    queryFn: ({ pageParam }) =>
      postGetRecords({
        body: {
          consumer_key: WEB_ENV.NEXT_PUBLIC_CONSUMER_KEY,
          offset: (pageParam > 1 ? pageParam * 10 : 0).toString(),
          count: "10",
          state: "all",
          sort: "newest",
          detailType: "simple",
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (Array.isArray(lastPage.list)) {
        if (!lastPage.list.length) {
          return undefined;
        }
        return Math.floor(lastPage.list.length / 10);
      }

      const keys = Object.keys(lastPage.list).length;

      // Use custom logic to determine the next page number
      return keys === 10 ? allPages.length + 1 : undefined;
    },
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 h-full overflow-y-auto pb-24 p-4 w-full">
      <div className="space-y-3">
        {postGetRecordsQuery.isSuccess &&
          postGetRecordsQuery.data.pages.map((item) =>
            Object.entries(item.list).map((record) => {
              const data = record[1];

              return <ContentCard data={data} key={data.item_id} />;
            }),
          )}
      </div>
      {postGetRecordsQuery.isLoading && <div className="flex items-center justify-center flex-col mt-8">
        <Icons.Spinner className="h-5 w-5 text-slate-400 animate-spin" />
        <p className="text-slate-500 mt-2">Fetching data...</p>
      </div>}
      {!postGetRecordsQuery.isLoading &&
        <div className="flex items-center justify-center mt-8">
          <Button
            onClick={() => postGetRecordsQuery.fetchNextPage()}
            variant="secondary"
            disabled={
              postGetRecordsQuery.isFetchingNextPage ||
              postGetRecordsQuery.isFetching ||
              !postGetRecordsQuery.hasNextPage
            }
          >
            Load More
            {(postGetRecordsQuery.isFetchingNextPage ||
              postGetRecordsQuery.isFetching) && (
                <Icons.Spinner className="ml-2 h-4 w-4 animate-spin" />
              )}
          </Button>
        </div>}
    </div>
  );
};

export default HomeContent;
