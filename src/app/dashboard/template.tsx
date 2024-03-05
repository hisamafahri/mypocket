import Sidebar from "./_components/sidebar";

const DashboardTemplate = async ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <main className="bg-gray-50 h-screen flex overflow-hidden">
    <div className="w-fulll h-full md:w-5/6 lg:w-2/3 mx-auto flex items-start justify-center">
      <div className="pt-16 w-full h-full flex gap-6">
        <Sidebar />
        {children}
      </div>
    </div>
  </main>
);

export default DashboardTemplate;
