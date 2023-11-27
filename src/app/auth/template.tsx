import { redirect } from "next/navigation";
import { getSession } from "../../lib/utils/helpers/session";

const AuthTemplate = async ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = await getSession();
  if (accessToken) {
    redirect("/dashboard");
  }

  return <main>{children}</main>;
};

export default AuthTemplate;
