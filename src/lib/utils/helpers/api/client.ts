import { MethodsParams, handleResponse } from ".";
import logger from "../logger";

// eslint-disable-next-line import/prefer-default-export
export const apiClient = async <T>(opts: MethodsParams): Promise<T> => {
  const requestOptions: RequestInit = {
    ...opts.options,
    headers: {
      ...opts.options?.headers,
      "Content-Type": "application/json",
      "X-Accept": "application/json",
    },
  };
  logger({ ...opts, timestamp: new Date() });

  return fetch(opts.url, requestOptions).then(handleResponse) as T;
};
