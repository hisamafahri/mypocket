import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line import/prefer-default-export
export const GET = async () => {
  // TODO: cookie's domain in Cloudflare Functions
  // const hostUrl = new URL(process.env.NEXT_PUBLIC_APP_HOST || request.url);
  // const hostnameParts = hostUrl.hostname.split(".");
  // const domain = `.${hostnameParts.slice(-2).join(".")}`;

  cookies().delete({ name: "username" });
  cookies().delete({ name: "access_token" });

  // URL to redirect to after sign in process completes
  return redirect("/auth/sign-in");
};
