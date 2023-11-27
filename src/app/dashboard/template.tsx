import { redirect } from "next/navigation";
import { getSession } from "../../lib/utils/helpers/session";

const DashboardTemplate = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { accessToken } = await getSession();
  if (!accessToken) {
    redirect("/auth/sign-in");
  }

  return <main>{children}</main>;
};

export default DashboardTemplate;
