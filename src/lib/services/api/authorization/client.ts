import {
  GetRequestTokenBody,
  GetRequestTokenResponse,
} from "../../../schemas/api/authorization";
import { FetchMethods, MethodsParams } from "../../../utils/helpers/api";
import { apiClient } from "../../../utils/helpers/api/client";
import buildUrl from "../../../utils/helpers/url";

// eslint-disable-next-line import/prefer-default-export
export const postGetRequestToken = async (opts: {
  body: GetRequestTokenBody;
}): Promise<GetRequestTokenResponse> => {
  const request: MethodsParams = {
    url: buildUrl({
      url: "/v3/oauth/request",
    }),
    options: {
      method: FetchMethods.POST,
      body: JSON.stringify(opts.body),
    },
  };

  return apiClient<GetRequestTokenResponse>(request);
};
