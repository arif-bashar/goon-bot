import Discord, { Message } from "discord.js"
import Natural, { WordTokenizer } from "natural";
import { botID } from "./Config";
import badWords from "./badWords";
import { badWordResponses } from './responses';


function commands(message: Message) {

  // Only execute this function if the last message author is not the bot
  if (message.author.id == botID)
    return;

  // Returns a random number between min and max inclusive
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const tokenizer = new WordTokenizer();
  let tokenizedMsg: string[];
  let badword: string;
  let chatMsg: string = message.content.toLowerCase();

  tokenizedMsg = tokenizer.tokenize(chatMsg);
  
  for (const [key] of Object.entries(badWords)) {
    if (tokenizedMsg.includes(key)) {
      badword = key;
      message.channel.send("blah blah blah stop cussing u bitch");
      break;
    }
  }
}

export default commands;
