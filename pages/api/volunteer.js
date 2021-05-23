import md5 from "md5";
import { MAILCHIMP_LIST_ID } from "../../utils/env";
import mailchimp from "../../utils/mailchimp";

async function main(req, res) {
  const {
    info,
    availability,
    email,
    firstName,
    lastName,
    phoneNumber,
    postalCode,
    pronouns,
  } = req.body;

  try {
    await mailchimp.lists.updateListMember(MAILCHIMP_LIST_ID, md5(email), {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        POSTAL: postalCode,
        PHONE: phoneNumber,
        PRONOUNS: pronouns,
        AVAILABLE: availability,
        ADDITIONAL: info,
      },
    });

    return res.status(201).json({});
  } catch (error) {
    console.error({ error });

    return res
      .status(error.status)
      .json({ errors: [JSON.parse(error.response.text).title] });
  }
}

export default main;
