import Discord, { Client } from "discord.js";
import { token } from "./Config";
import commands from "./commands";
import fs from "fs";
const chatlogs = require('./chatlogs.json');

fs.open('andrew-logs.txt', 'w', (err, file) => {});

for (let i = 0; i < 300; i++) {
  if (chatlogs.chats[i].author.id == "160229525404385280") {
    // console.log(chatlogs.chats[i].content);
    fs.appendFile('andrew-logs.txt', chatlogs.chats[i].content, (err) => {});
  }

}

const client: Client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message): void => commands(message));

client.login(token);
