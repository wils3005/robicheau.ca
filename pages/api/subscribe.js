import { MAILCHIMP_SUBSCRIBERS_LIST_ID } from "../../utils/env";
import mailchimp from "../../utils/mailchimp";

async function main(req, res) {
  const { firstName, lastName, email, postalCode } = req.body;

  try {
    await mailchimp.lists.addListMember(MAILCHIMP_SUBSCRIBERS_LIST_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        MMERGE6: postalCode,
      },
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}

export default main;
