import HomeBar from "./_components/homeBar";
import RecordsList from "./_components/recordsList";

const Dashboard = async () => (
  <main className="w-3/4 h-full space-y-4">
    <HomeBar />
    <RecordsList page="list" />
  </main>
);

export default Dashboard;
