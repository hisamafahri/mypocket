import { postGetRecords } from "../../lib/services/api/retrieve/server";
import WEB_ENV from "../../lib/utils/helpers/env";
import HomeBar from "./_components/homeBar";
import HomeContent from "./_components/homeContent";

const Dashboard = async () => {
  const data = await postGetRecords({
    body: {
      consumer_key: WEB_ENV.NEXT_PUBLIC_CONSUMER_KEY,
      offset: "0",
      count: "99999",
      state: "all",
      sort: "newest",
      detailType: "simple",
    },
  });

  return (
    <main className="w-3/4 h-full space-y-4">
      <HomeBar />
      <HomeContent data={data} />
    </main>
  );
};

export default Dashboard;
