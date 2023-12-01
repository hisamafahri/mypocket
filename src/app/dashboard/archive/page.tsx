import RecordsList from "../_components/recordsList";
import ArchiveBar from "./_components/archiveBar";

const Archive = async () => (
  <main className="w-3/4 h-full space-y-4">
    <ArchiveBar />
    <RecordsList page="archive" />
  </main>
);

export default Archive;
