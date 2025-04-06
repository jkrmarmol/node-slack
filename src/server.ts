import { config } from "dotenv";
import { App } from "@slack/bolt";

config({ path: "./.env.local" });

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  app.logger.info("⚡️ Bolt app is running!");
})();

app.event("app_home_opened", async ({ event, say, client }) => {
  console.log("Hello! someone opened the app home! so we will send them a message!");
  say(`Hello <@${event.user}>! Welcome to the app home!`);
});
