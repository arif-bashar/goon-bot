import * as Discord from "discord.js";
import { token } from "./Config";

const botID = "708855119508406373";
const client = new Discord.Client();

client.on("ready", () => {
  if (client.user != null)
    console.log("Logged into user " + client.user.username);
});

client.on("message", (message) => {
  let chatMsg: string = message.content.toLowerCase();

  if (message.author.id != botID) {
    if (chatMsg.includes("andrew")) {
      message.channel.send("did someone say andrew? i love andrew");
    } else if (chatMsg.includes("connor")) {
      message.channel.send("fuck connor");
    }
  }
});

client.login(token);
