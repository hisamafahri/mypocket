import logger from "../logger";
import { MethodsParams, handleResponse } from ".";

// eslint-disable-next-line import/prefer-default-export
export const apiServer = async <T>(opts: MethodsParams): Promise<T> => {
  const requestOptions: RequestInit = {
    ...opts.options,
    headers: {
      ...opts.options?.headers,
      Host: "getpocket.com",
      "Content-Type": "application/json; charset=UTF-8",
      "X-Accept": "application/json",
    },
  };
  logger({ ...opts, timestamp: new Date() });

  return fetch(opts.url, requestOptions).then(handleResponse) as T;
};
