import { cookies } from "next/headers";
import { FetchMethods, MethodsParams } from "../../../lib/utils/helpers/api";
import { apiServer } from "../../../lib/utils/helpers/api/server";
import buildUrl from "../../../lib/utils/helpers/url";
import { DOMAINS } from "../../../lib/utils/constants";

const handler = async (request: Request) => {
  const origin = new URL(request.url);
  const deploymentHost = new URL(
    process.env.NEXT_PUBLIC_APP_HOST || "https://mypocket.hisam.dev",
  );

  if (deploymentHost.host !== DOMAINS.TUNNEL) {
    if (origin.host !== deploymentHost.host) {
      return new Response("401 Unauthorized", {
        status: 401,
      });
    }
  }

  const body = await request.json();
  const accessToken = cookies().get("access_token")?.value;

  const options: MethodsParams = {
    url: buildUrl({
      url: origin.pathname,
      baseUrl: process.env.NEXT_PUBLIC_POCKET_API_BASE_URL,
    }),
    options: {
      method: FetchMethods.POST,
      body: JSON.stringify({
        ...body,
        access_token: accessToken,
        consumer_key: process.env.CONSUMER_KEY || "",
      }),
    },
  };

  try {
    const resp = (await apiServer(options)) as { code: string };

    return Response.json(resp, { status: 200 });
  } catch (e) {
    const value = (e as Error).toString() as string;
    return Response.json(
      { message: value },
      { status: parseInt((value.match(/\d+/) || "500") as string, 10) },
    );
  }
};

// eslint-disable-next-line import/prefer-default-export
export { handler as POST };
