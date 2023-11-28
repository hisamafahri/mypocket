import { postGetRecords } from "../../lib/services/api/retrieve/server";
import WEB_ENV from "../../lib/utils/helpers/env";
import HomeBar from "./_components/homeBar";
import RecordsList from "./_components/recordsList";
import SearchRecordDialog from "./_components/searchRecordDialog";

const Dashboard = async () => {
  const data = await postGetRecords({
    body: {
      consumer_key: WEB_ENV.NEXT_PUBLIC_CONSUMER_KEY,
      offset: "0",
      count: "99999",
      state: "unread",
      sort: "newest",
      detailType: "simple",
    },
  });

  return (
    <main className="w-3/4 h-full space-y-4">
      <HomeBar />
      <SearchRecordDialog
        data={Object.values(data.list).sort(
          (a, b) => parseInt(b.time_added, 10) - parseInt(a.time_added, 10),
        )}
      />
      <RecordsList data={data} />
    </main>
  );
};

export default Dashboard;
