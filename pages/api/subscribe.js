import md5 from "md5";
import { MAILCHIMP_LIST_ID } from "../../utils/env";
import mailchimp from "../../utils/mailchimp";

async function main(req, res) {
  const { firstName, lastName, email, postalCode } = req.body;

  const opts = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      POSTAL: postalCode,
    },
  };

  try {
    await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, opts);

    res.status(201).json({});
  } catch (_error) {
    console.error({ _error });

    try {
      await mailchimp.lists.updateListMember(
        MAILCHIMP_LIST_ID,
        md5(email),
        opts
      );

      res.status(201).json({});
    } catch (error) {
      console.error({ error });

      res
        .status(error.status)
        .json({ errors: [JSON.parse(error.response.text).title] });
    }
  }
}

export default main;
