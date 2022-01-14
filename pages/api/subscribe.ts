import md5 from "md5";
import type { NextApiHandler } from "next";
import { z } from "zod";

import { MAILCHIMP_LIST_ID } from "../../utils/env";
import { mailchimp } from "../../utils/mailchimp";

const requestSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty(),
  postalCode: z.string().nonempty(),
});

export const subscribe: NextApiHandler = async (req, res) => {
  const { firstName, lastName, email, postalCode } = requestSchema.parse(
    req.body
  );

  const mailchimpOptions = {
    email_address: email,
    status: "subscribed" as mailchimp.Status,
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      POSTAL: postalCode,
    },
  };

  try {
    await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, mailchimpOptions);
    res.status(201).end();
  } catch (_) {
    try {
      await mailchimp.lists.updateListMember(
        MAILCHIMP_LIST_ID,
        md5(email),
        mailchimpOptions
      );

      res.status(201).end();
    } catch (error: unknown) {
      console.error({ error });
      res.status(400).end();
    }
  }
};
