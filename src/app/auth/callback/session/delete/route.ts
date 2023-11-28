import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import WEB_ENV from "../../../../../lib/utils/helpers/env";

// eslint-disable-next-line import/prefer-default-export
export const GET = async () => {
  const domain = new URL(WEB_ENV.NEXT_PUBLIC_APP_HOST).hostname;
  cookies().delete({ name: "username", domain });
  cookies().delete({ name: "access_token", domain });

  // URL to redirect to after sign in process completes
  redirect("/auth/sign-in");
};
