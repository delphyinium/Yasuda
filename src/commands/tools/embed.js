const {
  SlashCommandBuilder,
  EmbedBuilder,
  Embed,
} = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Sends an embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("This is a test embed for the AyumiRewrite")
      .setDescription("This is a test embed for the AyumiRewrite")
      .setColor(0x716cad)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://youtube.com/fusionterror`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .addFields([
        {
          name: "This is a test embed for the AyumiRewrite",
          value: "This is a test embed for the AyumiRewrite",
          inline: true,
        },
        {
          name: "This is a test embed for the AyumiRewrite",
          value: "This is a test embed for the AyumiRewrite",
          inline: true,
        },
      ]);
    await interaction.reply({ embeds: [embed] });
  },
};
