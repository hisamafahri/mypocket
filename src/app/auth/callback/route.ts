import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hoursToSeconds } from "date-fns";
import { postGetAccessToken } from "../../../lib/services/api/authorization/server";
import { DUMMY_VALUES } from "../../../lib/utils/constants";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("request_token") || DUMMY_VALUES.UUID;
  try {
    const token = await postGetAccessToken({
      body: {
        code,
      },
    });

    if (!token || !token.access_token || !token.username) {
      redirect("/auth/sign-in");
    }

    // TODO: cookie's domain on Cloudflare Functions
    // const hostUrl = new URL(process.env.NEXT_PUBLIC_APP_HOST || request.url);
    // const hostnameParts = hostUrl.hostname.split(".");
    // const domain = `.${hostnameParts.slice(-2).join(".")}`;

    cookies().set({
      name: "access_token",
      value: token.access_token,
      path: "/",
      // domain,
      maxAge: hoursToSeconds(24 * 30),
      httpOnly: true,
    });
    cookies().set({
      name: "username",
      value: token.username,
      path: "/",
      maxAge: hoursToSeconds(24 * 30),
      // domain,
    });

    return redirect("/dashboard");
  } catch (e) {
    return redirect("/auth/sign-in");
  }
};
