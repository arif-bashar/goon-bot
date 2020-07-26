import Discord, { Message } from "discord.js"
import Natural, { WordTokenizer } from "natural";
import { botID } from "./Config";
import badWords from "./badWords";
import { badWordResponses } from './responses';


function commands(message: Message): void {

  // Only execute this function if the last message author is not the bot
  if (message.author.id == botID)
    return;

  // Returns a random number between min (inclusive) and max (exlcusive)
  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Returns a random response to a bad worded message
  const getBadResponse = (): string => {
    const badResponseSize: number = Object.keys(badWordResponses).length / 2; // Returns the number of items in badWordResponses object
    let response: number = getRandomInt(0, badResponseSize); // Gets random integer between 0 and the length of badWordResponses enum
    return badWordResponses[response];
  }

  const tokenizer = new WordTokenizer(); // Method that splits a string into an array of its words
  let tokenizedMsg: string[]; // Array to hold the tokenized chat message
  let chatMsg: string = message.content.toLowerCase(); // Turns the message into lower case
  let badResponse: string = getBadResponse();

  tokenizedMsg = tokenizer.tokenize(chatMsg);
  
  for (const [key] of Object.entries(badWords)) {
    if (tokenizedMsg.includes(key)) {
      message.channel.send(badResponse);
      break;
    }
  }
}

export default commands;
