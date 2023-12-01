import {
  GetRecordsBody,
  GetRecordsResponse,
} from "../../../schemas/api/retrieve";
import { FetchMethods, MethodsParams } from "../../../utils/helpers/api";
import { apiClient } from "../../../utils/helpers/api/client";
import buildUrl from "../../../utils/helpers/url";

// eslint-disable-next-line import/prefer-default-export
export const postGetRecords = async (opts: {
  body: GetRecordsBody;
}): Promise<GetRecordsResponse> => {
  const request: MethodsParams = {
    url: buildUrl({
      url: "/v3/get",
    }),
    options: {
      method: FetchMethods.POST,
      body: JSON.stringify(opts.body),
    },
  };

  return apiClient<GetRecordsResponse>(request);
};
