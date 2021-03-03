"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const natural_1 = require("natural");
const axios_1 = __importDefault(require("axios"));
const Config_1 = require("./Config");
const badWords_1 = __importDefault(require("./badWords"));
const responses_1 = require("./responses");
function commands(message) {
    // Only execute this function if the last message author is not the bot
    if (message.author.id == Config_1.botID)
        return;
    // Returns a random number between min (inclusive) and max (exlcusive)
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    // Returns a random response to a bad worded message
    const getBadResponse = () => {
        const badResponseSize = Object.keys(responses_1.badWordResponses).length / 2; // Returns the number of items in badWordResponses object
        let response = getRandomInt(0, badResponseSize); // Gets random integer between 0 and the length of badWordResponses enum
        return responses_1.badWordResponses[response];
    };
    const tokenizer = new natural_1.WordTokenizer(); // Method that splits a string into an array of its words
    let tokenizedMsg; // Array to hold the tokenized chat message
    let chatMsg = message.content.toLowerCase(); // Turns the message into lower case
    let badResponse = getBadResponse();
    tokenizedMsg = tokenizer.tokenize(chatMsg);
    /* Iterates through badWords object and if tokenizedMsg array contains an element
    that matches key in badWords, send response */
    for (const [key] of Object.entries(badWords_1.default)) {
        if (tokenizedMsg.includes(key)) {
            message.channel.send(badResponse);
            break;
        }
    }
    if (chatMsg.startsWith("!stonk")) {
        const getStock = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield axios_1.default.get(`https://cloud.iexapis.com/stable/tops?token=${Config_1.iexToken}&symbols=${tokenizedMsg[1]}`);
                message.channel.send(`Last sale price of ${tokenizedMsg[1].toUpperCase()}: ${resp.data[0].lastSalePrice} https://iextrading.com/apps/stocks/${tokenizedMsg[1]}`);
            }
            catch (err) {
                // console.log(err)
            }
        });
        getStock();
    }
}
exports.default = commands;
