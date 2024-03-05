import {
  GetAccessTokenBody,
  GetAccessTokenResponse,
} from "../../../schemas/api/authorization";
import { FetchMethods, MethodsParams } from "../../../utils/helpers/api";
import { apiServerNoErrorCheck } from "../../../utils/helpers/api/server";
import buildUrl from "../../../utils/helpers/url";

// eslint-disable-next-line import/prefer-default-export
export const postGetAccessTokenNoErrorCheck = async (opts: {
  body: GetAccessTokenBody;
}): Promise<GetAccessTokenResponse> => {
  const request: MethodsParams = {
    url: buildUrl({
      url: "/v3/oauth/authorize",
    }),
    options: {
      method: FetchMethods.POST,
      body: JSON.stringify(opts.body),
    },
  };

  return apiServerNoErrorCheck<GetAccessTokenResponse>(request);
};
