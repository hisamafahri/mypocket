import RecordsList from "../_components/recordsList";
import FavoriteBar from "./_components/favoriteBar";

const Archive = async () => (
  <main className="w-3/4 h-full space-y-4">
    <FavoriteBar />
    <RecordsList page="favorite" />
  </main>
);

export default Archive;
