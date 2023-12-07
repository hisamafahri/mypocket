import { z } from "zod";

// Base

const getRecordResponseItem = z.object({
  item_id: z.string(),
  resolved_id: z.string(),
  given_url: z.string(),
  given_title: z.string(),
  favorite: z.string(),
  status: z.string(),
  time_added: z.string(),
  time_updated: z.string(),
  time_read: z.string(),
  time_favorited: z.string(),
  sort_id: z.number(),
  resolved_title: z.string(),
  resolved_url: z.string(),
  excerpt: z.string(),
  is_article: z.string(),
  is_index: z.string(),
  has_video: z.string(),
  has_image: z.string(),
  word_count: z.string(),
  lang: z.string(),
  listen_duration_estimate: z.number(),
});

// POST /v3/get
export const getRecordsBody = z.object({
  count: z.string().optional(),
  offset: z.string().optional(),
  favorite: z.number().optional(),
  detailType: z.enum(["simple", "complete"]).optional(),
  state: z.enum(["unread", "archive", "all"]).optional(),
  sort: z.enum(["newest", "oldest", "title", "site"]).optional(),
});

export const getRecordsResponse = z.object({
  status: z.number(),
  complete: z.number(),
  list: z.record(getRecordResponseItem),
  error: z.string().nullable(),
  search_meta: z.object({
    search_type: z.string(),
  }),
  since: z.number(),
});

export type GetRecordResponseItem = z.infer<typeof getRecordResponseItem>;

export type GetRecordsBody = z.infer<typeof getRecordsBody>;

export type GetRecordsResponse = z.infer<typeof getRecordsResponse>;
