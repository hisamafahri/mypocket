import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hoursToSeconds } from "date-fns";
import { DOMAINS, DUMMY_VALUES } from "../../../lib/utils/constants";
import { postGetAccessTokenNoErrorCheck } from "../../../lib/services/api/authorization/server";

// eslint-disable-next-line import/prefer-default-export
export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("request_token") || DUMMY_VALUES.UUID;
  try {
    const token = await postGetAccessTokenNoErrorCheck({
      body: {
        code,
      },
    });

    if (!token || !token.access_token || !token.username) {
      redirect("/auth/sign-in");
    }

    cookies().set({
      name: "access_token",
      value: token.access_token,
      path: "/",
      maxAge: hoursToSeconds(24 * 30),
      httpOnly: true,
      sameSite: "strict",
      domain: `.${DOMAINS.PRIMARY}`,
    });
    cookies().set({
      name: "username",
      value: token.username,
      path: "/",
      maxAge: hoursToSeconds(24 * 30),
      sameSite: "strict",
      domain: `.${DOMAINS.PRIMARY}`,
    });

    redirect("/dashboard");
  } catch (e) {
    cookies().delete({ name: "access_token", domain: `.${DOMAINS.PRIMARY}` });
    cookies().delete({ name: "username", domain: `.${DOMAINS.PRIMARY}` });
    redirect("/auth/sign-in");
  }
};
