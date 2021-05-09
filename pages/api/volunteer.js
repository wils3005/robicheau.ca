import { MAILCHIMP_VOLUNTEERS_LIST_ID } from "../../utils/env";
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
    await mailchimp.lists.addListMember(MAILCHIMP_VOLUNTEERS_LIST_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phoneNumber,
        MMERGE3: pronouns,
        MMERGE5: postalCode,
        MMERGE6: availability,
        MMERGE7: info,
      },
    });

    return res.status(201).json({ message: "TODO" });
  } catch (error) {
    return res
      .status(error.status)
      .json({ message: JSON.parse(error.response.text).title });
  }
}

export default main;
