import * as zod from "zod";
import mailchimp from "@mailchimp/mailchimp_marketing";

const { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_LIST_ID } = zod
  .object({
    MAILCHIMP_API_KEY: zod.string().refine((s) => s.length == 37, {
      message: "A Mailchimp API key is 37 characters",
    }),
    MAILCHIMP_API_SERVER: zod.string().refine((s) => s.length == 4, {
      message: "A Mailchimp API server prefix is 4 characters",
    }),
    MAILCHIMP_LIST_ID: zod.string().refine((s) => s.length == 10, {
      message: "A Mailchimp list ID is 10 characters",
    }),
  })
  .parse(process.env);

async function main(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "subscribed",
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER,
});

export default main;
