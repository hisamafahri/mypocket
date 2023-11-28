import { redirect } from "next/navigation";
import { getSession } from "../../lib/utils/helpers/session";
import Sidebar from "./_components/sidebar";
import SearchRecordDialog from "./_components/searchRecordDialog";

const DashboardTemplate = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { accessToken } = await getSession();
  if (!accessToken) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="bg-gray-50 h-screen">
      <div className="w-full md:w-5/6 lg:w-2/3 mx-auto h-screen flex items-start justify-center">
        <div className="mt-16 w-full flex gap-6">
          <SearchRecordDialog />
          <Sidebar />
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardTemplate;
