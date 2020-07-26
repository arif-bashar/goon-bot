import { Message } from "discord.js";
import { botID } from "./Config";

function commands(message: Message) {
  let chatMsg: string = message.content.toLowerCase();

  if (message.author.id != botID) {
    if (chatMsg.includes("andrew")) {
      message.channel.send("did someone say andrew? i love andrew");
    } else if (chatMsg.includes("connor")) {
      message.channel.send("fuck connor");
    } else if (chatMsg.includes("test")) {
      message.channel.send("hi arif ur so cool");
    }
  }
}

export default commands;
