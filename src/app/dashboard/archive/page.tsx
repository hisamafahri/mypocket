import MainBar from "../_components/mainBar";
import RecordsList from "../_components/recordsList";

const Archive = async () => (
  <main className="w-3/4 h-full space-y-4">
    <MainBar page="archive" />
    <RecordsList page="archive" />
  </main>
);

export default Archive;
