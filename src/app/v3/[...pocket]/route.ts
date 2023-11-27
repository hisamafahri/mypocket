import { FetchMethods, MethodsParams } from "../../../lib/utils/helpers/api";
import { apiServer } from "../../../lib/utils/helpers/api/server";
import WEB_ENV from "../../../lib/utils/helpers/env";
import buildUrl from "../../../lib/utils/helpers/url";

export const handler = async (request: Request) => {
  const origin = new URL(request.url);
  const body = await request.json();
  const options: MethodsParams = {
    url: buildUrl({
      url: origin.pathname,
      baseUrl: WEB_ENV.NEXT_PUBLIC_POCKET_API_BASE_URL,
    }),
    options: {
      method: FetchMethods.POST,
      body: JSON.stringify(body),
    },
  };

  try {
    const resp = await apiServer(options);

    return Response.json(resp);
  } catch (e) {
    const value = (e as Error).toString() as string;
    return Response.json(
      { message: value },
      { status: parseInt((value.match(/\d+/) || "500") as string, 10) },
    );
  }
};

export { handler as POST };
