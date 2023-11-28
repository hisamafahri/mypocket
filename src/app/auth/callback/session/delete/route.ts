import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (request: Request) => {
  const domain = new URL(process.env.NEXT_PUBLIC_APP_HOST || request.url)
    .hostname;
  cookies().delete({ name: "username", domain });
  cookies().delete({ name: "access_token", domain });

  // URL to redirect to after sign in process completes
  redirect("/auth/sign-in");
};
