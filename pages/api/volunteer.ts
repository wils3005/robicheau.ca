import md5 from "md5";
import type { NextApiHandler } from "next";
import { z } from "zod";

import { MAILCHIMP_LIST_ID } from "../../utils/env";
import { mailchimp } from "../../utils/mailchimp";

const requestSchema = z.object({
  info: z.string().nonempty(),
  availability: z.string().nonempty(),
  email: z.string().nonempty(),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  postalCode: z.string().nonempty(),
  pronouns: z.string().nonempty(),
});

export const volunteer: NextApiHandler = async (req, res) => {
  const {
    info,
    availability,
    email,
    firstName,
    lastName,
    phoneNumber,
    postalCode,
    pronouns,
  } = requestSchema.parse(req.body);

  const mailchimpOptions = {
    email_address: email,
    status: "subscribed" as mailchimp.Status,
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      POSTAL: postalCode,
      PHONE: phoneNumber,
      PRONOUNS: pronouns,
      AVAILABLE: availability,
      ADDITIONAL: info,
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
