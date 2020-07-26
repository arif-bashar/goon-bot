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
  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const tokenizer = new WordTokenizer(); // Method that splits a string into an array of its words
  const badResponseSize: number = Object.keys(badWordResponses).length / 2; // Returns the number of items in badWordResponses object
  let tokenizedMsg: string[]; // Array to hold the tokenized chat message
  let chatMsg: string = message.content.toLowerCase(); // Turns the message into lower case
  let response: number = getRandomInt(0, badResponseSize);

  tokenizedMsg = tokenizer.tokenize(chatMsg);
  
  for (const [key] of Object.entries(badWords)) {
    if (tokenizedMsg.includes(key)) {
      console.log(response);
      message.channel.send(badWordResponses[response]);
      break;
    }
  }
}

export default commands;
