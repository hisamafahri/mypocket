import { z } from "zod";

// Base

// POST /v3/send
export const sendActionsBody = z.object({
  consumer_key: z.string(),
  actions: z.array(
    z.object({
      action: z.enum(["archive", "delete", "readd", "favorite", "unfavorite"]),
      item_id: z.string(),
    }),
  ),
});

export const sendActionsResponse = z.object({
  action_results: z.array(z.boolean()),
  action_errors: z.array(z.string().nullable()),
  status: z.number(),
});

export type SendActionsBody = z.infer<typeof sendActionsBody>;

export type SendActionsResponse = z.infer<typeof sendActionsResponse>;
