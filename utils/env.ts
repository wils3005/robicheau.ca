import * as zod from "zod";

const {
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_SUBSCRIBERS_LIST_ID,
  MAILCHIMP_VOLUNTEERS_LIST_ID,
} = zod
  .object({
    MAILCHIMP_API_KEY: zod.string().refine((s) => s.length === 37, {
      message: "A Mailchimp API key is 37 characters",
    }),
    MAILCHIMP_API_SERVER: zod.string().refine((s) => s.length === 4, {
      message: "A Mailchimp API server prefix is 4 characters",
    }),
    MAILCHIMP_SUBSCRIBERS_LIST_ID: zod.string().refine((s) => s.length === 10, {
      message: "A Mailchimp list ID is 10 characters",
    }),
    MAILCHIMP_VOLUNTEERS_LIST_ID: zod.string().refine((s) => s.length === 10, {
      message: "A Mailchimp list ID is 10 characters",
    }),
  })
  .parse(process.env);

export {
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_SUBSCRIBERS_LIST_ID,
  MAILCHIMP_VOLUNTEERS_LIST_ID,
};
