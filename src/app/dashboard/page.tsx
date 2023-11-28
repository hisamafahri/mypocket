import HomeBar from "./_components/homeBar";
import HomeContent from "./_components/homeContent";

const Dashboard = () => (
  <main className="flex-1">
    <div className="space-y-4">
      <HomeBar />
      <HomeContent />
    </div>
  </main>
);

export default Dashboard;
