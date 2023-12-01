"use mutation";

import Link from "next/link";
import { format } from "date-fns";
import Avatar from "boring-avatars";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GetRecordResponseItem } from "../../../lib/schemas/api/retrieve";
import { DATE_FORMAT } from "../../../lib/utils/constants/date";
import { Icons } from "../../../components/ui/icons";
import { Button, buttonVariants } from "../../../components/ui/button";
import { postSendActions } from "../../../lib/services/api/modify/client";
import { SendActionsBody } from "../../../lib/schemas/api/modify";
import { Skeleton } from "../../../components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { cn } from "../../../lib/utils/helpers";

const getDateCreatedDisplay = (unixString: string) => {
  const date = new Date(parseInt(unixString, 10) * 1000);

  return format(date, DATE_FORMAT.DATE_NUMBER_DOTTED_SHORT);
};

type ContentCardProps = {
  data: GetRecordResponseItem;
  page: "archive" | "list" | "favorite";
};

const ContentCard = ({ data, page }: ContentCardProps) => {
  const queryClient = useQueryClient();
  const postSendActionsMutation = useMutation({
    mutationKey: ["postSendActionsMutation"],
    mutationFn: async (body: SendActionsBody) => postSendActions({ body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postGetRecordsQuery"] });
    },
  });

  if (postSendActionsMutation.isPending || postSendActionsMutation.isSuccess) {
    return <Skeleton className="h-14" />;
  }

  return (
    <div className="border hover:border-gray-300 border-t-white border-x-white border-gray-300 p-2 hover:rounded-lg hover:bg-gray-50 flex items-center justify-between group/main w-full">
      <div className="flex flex-row items-center justify-start space-x-4 w-3/4 shrink">
        <div>
          <Avatar size={36} name={data.item_id} variant="marble" />
        </div>
        <Link href={data.given_url} className="w-full" target="_blank">
          <p className="text-base text-slate-800 truncate font-medium w-full">
            {data.given_title ||
              data.resolved_title ||
              new URL(data.given_url).origin}
          </p>
          <p className="text-sm text-slate-500 truncate w-full">
            {data.given_url}
          </p>
        </Link>
      </div>
      <div className="w-12 flex flex-col items-end justify-end">
        <p className="whitespace-nowrap text-right text-sm text-slate-600">
          {getDateCreatedDisplay(data.time_added)}
        </p>
        <div className="hidden group-hover/main:flex space-x-2">
          {page === "archive" && (
            <Button
              variant="ghost"
              className="p-0 m-0 h-5 hover:bg-white group/action"
              onClick={() =>
                postSendActionsMutation.mutate({
                  consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
                  actions: [{ item_id: data.item_id, action: "readd" }],
                })
              }
            >
              <Icons.ArchiveRestore className="w-4 h-4 text-slate-400 group-hover/action:stroke-slate-900" />
            </Button>
          )}
          {(page === "list" || page === "favorite") && (
            <Button
              variant="ghost"
              className="p-0 m-0 h-5 hover:bg-white group/action"
              onClick={() =>
                postSendActionsMutation.mutate({
                  consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
                  actions: [{ item_id: data.item_id, action: "archive" }],
                })
              }
            >
              <Icons.Archive className="w-4 h-4 text-slate-400 group-hover/action:stroke-slate-900" />
            </Button>
          )}
          <Button
            variant="ghost"
            className="p-0 m-0 h-5 hover:bg-white group/action"
            onClick={() =>
              postSendActionsMutation.mutate({
                consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
                actions: [
                  {
                    item_id: data.item_id,
                    action: data.favorite === "0" ? "favorite" : "unfavorite",
                  },
                ],
              })
            }
          >
            {data.favorite === "0" ? (
              <Icons.Star className="w-4 h-4 text-slate-400 group-hover/action:stroke-yellow-500" />
            ) : (
              <Icons.StarOff className="w-4 h-4 text-yellow-500 group-hover/action:stroke-slate-400" />
            )}
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 m-0 h-5 hover:bg-white group/action"
              >
                <Icons.Trash2 className="w-4 h-4 text-slate-400 group-hover/action:stroke-red-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete record?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this record.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className={cn(buttonVariants({ variant: "destructive" }))}
                  onClick={() =>
                    postSendActionsMutation.mutate({
                      consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
                      actions: [{ item_id: data.item_id, action: "delete" }],
                    })
                  }
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
