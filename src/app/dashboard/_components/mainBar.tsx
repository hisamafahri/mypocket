"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../../../components/ui/button";
import { Icons } from "../../../components/ui/icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { cn } from "../../../lib/utils/helpers";
import { useStateContext } from "../../../lib/utils/providers/state";
import { postGetRecords } from "../../../lib/services/api/retrieve/client";
import { setRecordsToLocalStorage } from "../../../lib/utils/helpers/localStorage";

type MainBarProps = {
  page: "archive" | "list" | "favorite";
};

const MainBar = ({ page }: MainBarProps) => {
  const router = useRouter();
  const { state, dispatch } = useStateContext();

  const postGetRecordsMutation = useMutation({
    mutationKey: ["postGetRecordsMutation"],
    mutationFn: async () =>
      postGetRecords({
        body: {
          consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
          offset: "0",
          state: "all",
          count: "99999",
          sort: "newest",
          detailType: "simple",
        },
      }),
    onSuccess: (data) => {
      const result = Object.values(data.list).sort(
        (a, b) => parseInt(b.time_added, 10) - parseInt(a.time_added, 10),
      );

      setRecordsToLocalStorage(result);
      router.refresh();
    },
  });

  return (
    <TooltipProvider>
      <div className="bg-white rounded-lg border border-gray-200 py-3 px-4 flex items-center justify-between">
        <p className="font-semibold text-slate-700">
          {page === "list"
            ? "Home"
            : page.charAt(0).toUpperCase() + page.slice(1)}
        </p>
        <div>
          <Tooltip>
            <TooltipTrigger
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "p-3 m-0 hidden",
              )}
            >
              <Icons.Plus className="w-4 h-4 text-slate-500" />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-50 border border-slate-200">
              <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>I
                </kbd>
              </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              className={cn(buttonVariants({ variant: "ghost" }), "p-3 m-0")}
              onClick={() => {
                setRecordsToLocalStorage([]);
                postGetRecordsMutation.mutate();
              }}
            >
              <Icons.RefreshCw
                className={cn(
                  "w-4 h-4 text-slate-500",
                  postGetRecordsMutation.isPending && "animate-spin",
                )}
              />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-50 border border-slate-200">
              <p className="text-sm text-muted-foreground">Sync</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              className={cn(buttonVariants({ variant: "ghost" }), "p-3 m-0")}
              onClick={() =>
                dispatch({
                  type: "SET_SEARCH_DIALOG",
                  payload: !state.searchDialog,
                })
              }
            >
              <Icons.Search className="w-4 h-4 text-slate-500" />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-50 border border-slate-200">
              <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MainBar;
