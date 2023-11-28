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
        consumer_key: process.env.NEXT_PUBLIC_CONSUMER_KEY || "",
        code,
      },
    });

    if (!token || !token.access_token || !token.username) {
      redirect("/auth/sign-in");
    }
    const domain = new URL(process.env.NEXT_PUBLIC_APP_HOST || request.url)
      .hostname;

    cookies().set({
      name: "access_token",
      value: token.access_token,
      path: "/",
      domain,
      maxAge: hoursToSeconds(24 * 30),
      httpOnly: true,
    });
    cookies().set({
      name: "username",
      value: token.username,
      path: "/",
      maxAge: hoursToSeconds(24 * 30),
      domain,
    });

    redirect("/dashboard");
  } catch (e) {
    redirect("/auth/sign-in");
  }
};
