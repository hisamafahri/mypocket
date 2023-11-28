import { Icons } from "../../../components/ui/icons";
import { Separator } from "../../../components/ui/separator";
import { SectionListItem, UserListItem } from "./listItem";

const Sidebar = () => (
  <div className="w-1/4 bg-white rounded-lg border border-gray-200 p-4 space-y-4">
    <UserListItem />
    <Separator className="w-1/2 mx-auto" />
    <div className="space-y-2">
      <SectionListItem
        title="Home"
        href="/dashboard"
        icon={<Icons.Home className="mr-2 w-5 h-5 text-gray-500" />}
      />
      <SectionListItem
        title="Archive"
        href="/dashboard/archive"
        icon={<Icons.Archive className="mr-2 w-5 h-5 text-gray-500" />}
      />
      <SectionListItem
        title="My List"
        href="/dashboard/lists"
        icon={<Icons.Lists className="mr-2 w-5 h-5 text-gray-500" />}
      />
    </div>
  </div>
);

export default Sidebar;
