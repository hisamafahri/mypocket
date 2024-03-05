import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
  const accessToken = cookies().get("access_token")?.value;
  if (!accessToken) {
    redirect("/auth/sign-in");
  } else {
    redirect("/dashboard");
  }
};

export default Home;
