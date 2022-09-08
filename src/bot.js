require("dotenv").config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = Client({
  intents: GatewayIntentBits.Guilds | GatewayIntentBits.GuildMessages,
});
client.commands = new Collection();
client.color = "#630e47";

const functionFolders = fs.readdirSync("./src/functions");
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles) {
    const command = require(`./functions/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}
