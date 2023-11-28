import {
  SendActionsBody,
  SendActionsResponse,
} from "../../../schemas/api/modify";
import { FetchMethods, MethodsParams } from "../../../utils/helpers/api";
import { apiClient } from "../../../utils/helpers/api/client";
import buildUrl from "../../../utils/helpers/url";

// eslint-disable-next-line import/prefer-default-export
export const postSendActions = async (opts: {
  body: SendActionsBody;
}): Promise<SendActionsResponse> => {
  const request: MethodsParams = {
    url: buildUrl({
      url: "/v3/send",
    }),
    options: {
      method: FetchMethods.POST,
      body: JSON.stringify(opts.body),
    },
  };

  return apiClient<SendActionsResponse>(request);
};
