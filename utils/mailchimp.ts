import mailchimp from "@mailchimp/mailchimp_marketing";

import { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER } from "./env";

const config: mailchimp.Config = {
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER,
};

mailchimp.setConfig(config);

export { mailchimp };
