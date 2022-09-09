const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require("@discordjs/builders");
const { ButtonStyle } = require("discord.js")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Return a button"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()

      .setLabel("Subscribe to FusionTerror")
      .setStyle(ButtonStyle.Link)
      .setURL("https://youtube.com/fusionterror");

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: "Click the button to subscribe to FusionTerror",
      components: [row],
    });
  },
};
