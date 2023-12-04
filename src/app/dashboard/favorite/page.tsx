import MainBar from "../_components/mainBar";
import RecordsList from "../_components/recordsList";

const Favorite = async () => (
  <main className="w-3/4 h-full space-y-4">
    <MainBar page="favorite" />
    <RecordsList page="favorite" />
  </main>
);

export default Favorite;
