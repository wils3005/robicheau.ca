import { z } from "zod";

const schema = z.object({
  MAILCHIMP_API_KEY: z.string().refine((s) => s.length === 37, {
    message: "A Mailchimp API key is 37 characters",
  }),
  MAILCHIMP_API_SERVER: z.string().refine((s) => s.length === 4, {
    message: "A Mailchimp API server prefix is 4 characters",
  }),
  MAILCHIMP_LIST_ID: z.string().refine((s) => s.length === 10, {
    message: "A Mailchimp list ID is 10 characters",
  }),
});

export const { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_LIST_ID } =
  schema.parse(process.env);
