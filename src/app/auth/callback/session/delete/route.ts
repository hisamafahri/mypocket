import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line import/prefer-default-export
export const GET = async () => {
  cookies().delete({ name: "username" });
  cookies().delete({ name: "access_token" });

  redirect("/auth/sign-in");
};
