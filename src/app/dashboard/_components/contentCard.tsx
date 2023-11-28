import Link from "next/link";
import { format } from "date-fns";
import Avatar from "boring-avatars";
import { GetRecordResponseItem } from "../../../lib/schemas/api/retrieve";
import { DATE_FORMAT } from "../../../lib/utils/constants/date";

const getDateCreatedDisplay = (unixString: string) => {
  const date = new Date(parseInt(unixString, 10) * 1000);

  return format(date, DATE_FORMAT.DATE_NUMBER_DOTTED_SHORT);
};

type ContentCardProps = {
  data: GetRecordResponseItem;
};

const ContentCard = ({ data }: ContentCardProps) => (
  <div className="border hover:border-gray-300 border-t-white border-x-white border-gray-300 p-2 hover:rounded-lg hover:bg-gray-50 flex items-center justify-between group w-full">
    <div className="-mr-4">
      <Avatar size={36} name={data.item_id} variant="marble" />
    </div>
    <div className="flex flex-row items-center justify-start space-x-4 w-3/4 shrink">
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
      <p className="whitespace-nowrap text-right text-sm text-slate-600">
        Actions
      </p>
    </div>
  </div>
);

export default ContentCard;
