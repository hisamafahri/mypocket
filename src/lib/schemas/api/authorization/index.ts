import { z } from "zod";

// Base

// POST /v3/oauth/request
export const getRequestTokenBody = z.object({
  consumer_key: z.string(),
  redirect_uri: z.string(),
});

export const getRequestTokenResponse = z.object({
  code: z.string(),
  state: z.string().nullable(),
});

// POST /v3/oauth/authorize
export const getAccessTokenBody = z.object({
  consumer_key: z.string(),
  code: z.string(),
});

export const getAccessTokenResponse = z.object({
  access_token: z.string(),
  username: z.string(),
});

export type GetRequestTokenBody = z.infer<typeof getRequestTokenBody>;

export type GetRequestTokenResponse = z.infer<typeof getRequestTokenResponse>;

export type GetAccessTokenBody = z.infer<typeof getAccessTokenBody>;

export type GetAccessTokenResponse = z.infer<typeof getAccessTokenResponse>;
