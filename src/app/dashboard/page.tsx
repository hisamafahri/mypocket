import MainBar from "./_components/mainBar";
import RecordsList from "./_components/recordsList";

const Dashboard = async () => (
  <main className="w-3/4 h-full space-y-4">
    <MainBar page="list" />
    <RecordsList page="list" />
  </main>
);

export default Dashboard;
