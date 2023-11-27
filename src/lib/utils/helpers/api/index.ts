import logger from "../logger";

// eslint-disable-next-line no-shadow
export enum FetchMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const headers: HeadersInit = { "Content-Type": "application/json" };

export type MethodsParams = {
  url: string | URL;
  options?: RequestInit;
};

export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const value = await response.text();
    logger(value);
    throw new Error(value);
  }

  return response.json();
};
