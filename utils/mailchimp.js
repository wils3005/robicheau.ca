import mailchimp from "@mailchimp/mailchimp_marketing";

import { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER } from "./env";

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER,
});

export default mailchimp;
