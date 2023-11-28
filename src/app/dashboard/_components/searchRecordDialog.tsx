"use client";

import { useEffect } from "react";
import Avatar from "boring-avatars";
import {
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
  CommandEmpty,
} from "../../../components/ui/command";
import { useStateContext } from "../../../lib/utils/providers/state";
import { GetRecordResponseItem } from "../../../lib/schemas/api/retrieve";

type SearchRecordDialogProps = {
  data: GetRecordResponseItem[];
};

const SearchRecordDialog = ({ data }: SearchRecordDialogProps) => {
  const { state, dispatch } = useStateContext();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch({ type: "SET_SEARCH_DIALOG", payload: !state.searchDialog });
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog
      open={state.searchDialog}
      onOpenChange={(e) => dispatch({ type: "SET_SEARCH_DIALOG", payload: e })}
      filter={(value, search) => {
        if (value.includes(search)) return 1;
        return 0;
      }}
    >
      <CommandInput placeholder="Discover your pocket..." />

      <CommandList>
        {!data.length && <CommandEmpty>No results found.</CommandEmpty>}
        {data.map((item) => (
          <CommandItem
            key={item.item_id}
            className="space-x-4 w-full"
            onSelect={() => window.open(item.given_url, "_blank")}
          >
            <div>
              <Avatar size={20} name={item.item_id} variant="marble" />
            </div>
            <span className="truncate">
              {item.given_title ||
                item.resolved_title ||
                new URL(item.given_url).origin}
            </span>
            <span className="text-slate-400 truncate">
              {new URL(item.given_url).hostname}
            </span>
          </CommandItem>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchRecordDialog;
