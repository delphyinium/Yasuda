const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Return a button"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("sub-yt")
      .setLabel("Subscribe to FusionTerror")
      .setStyle(ButtonStyle.LINK)
      .setURL("https://youtube.com/fusionterror");

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: "Click the button to subscribe to FusionTerror",
      components: [row],
    });
  },
};
