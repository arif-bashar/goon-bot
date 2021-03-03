"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Config_1 = require("./Config");
const commands_1 = __importDefault(require("./commands"));
const client = new discord_js_1.default.Client();
client.once("ready", () => {
    console.log("Ready!");
});
client.on("message", (message) => commands_1.default(message));
client.login(Config_1.token);
