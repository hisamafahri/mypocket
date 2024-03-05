import { cookies } from "next/headers";
import { hoursToSeconds } from "date-fns";
import { DUMMY_VALUES } from "../../../lib/utils/constants";
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
      return Response.json({
        error: `missing token data: ${JSON.stringify(token)}`,
      });
    }

    cookies().set({
      name: "access_token",
      value: token.access_token,
      path: "/",
      maxAge: hoursToSeconds(24 * 30),
      httpOnly: true,
      sameSite: "strict",
    });
    cookies().set({
      name: "username",
      value: token.username,
      path: "/",
      maxAge: hoursToSeconds(24 * 30),
      sameSite: "strict",
    });
    return Response.json({
      success: `visit ${process.env.NEXT_PUBLIC_APP_HOST}/dashboard`,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    cookies().delete({ name: "access_token" });
    cookies().delete({ name: "username" });
    return Response.json({ error: `something went wrong: ${e}` });
  }
};
