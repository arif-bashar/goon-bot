import Discord, { Client } from "discord.js";
import { token } from "./Config";
import commands from "./commands";

const client: Client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => commands(message));

client.login(token);
