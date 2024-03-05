import { redirect } from "next/navigation";
import { getSession } from "../lib/utils/helpers/session";

const Home = async () => {
  const { accessToken } = getSession();
  if (!accessToken) {
    redirect("/auth/sign-in");
  } else {
    redirect("/dashboard");
  }
};

export default Home;
