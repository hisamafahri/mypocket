"use client";

import { buttonVariants } from "../../../../components/ui/button";
import { Icons } from "../../../../components/ui/icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import { cn } from "../../../../lib/utils/helpers";
import { useStateContext } from "../../../../lib/utils/providers/state";

const ArchiveBar = () => {
  const { state, dispatch } = useStateContext();
  return (
    <TooltipProvider>
      <div className="bg-white rounded-lg border border-gray-200 py-3 px-4 flex items-center justify-between">
        <p className="font-semibold text-slate-700">Archive</p>
        <div>
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

export default ArchiveBar;
