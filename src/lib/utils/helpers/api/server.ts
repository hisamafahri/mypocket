import { cookies } from "next/headers";
import logger from "../logger";
import { MethodsParams, handleResponse, handleResponseNoErrorCheck } from ".";

export const apiServer = async <T>(opts: MethodsParams): Promise<T> => {
  const requestOptions: RequestInit = {
    ...opts.options,
    headers: {
      ...opts.options?.headers,
      "Content-Type": "application/json; charset=UTF-8",
      "X-Accept": "application/json",
      Cookie: cookies().toString(),
    },
  };
  logger({ ...opts, timestamp: new Date() });

  return fetch(opts.url, requestOptions).then(handleResponse) as T;
};

export const apiServerNoErrorCheck = async <T>(
  opts: MethodsParams,
): Promise<T> => {
  const requestOptions: RequestInit = {
    ...opts.options,
    headers: {
      ...opts.options?.headers,
      "Content-Type": "application/json; charset=UTF-8",
      "X-Accept": "application/json",
      Cookie: cookies().toString(),
    },
  };
  logger({ ...opts, timestamp: new Date() });

  return fetch(opts.url, requestOptions).then(handleResponseNoErrorCheck) as T;
};
