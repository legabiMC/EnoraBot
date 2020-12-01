const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#ad14da")
    .setDescription(args.join(" "))
    .setThumbnail("https://cdn.icon-icons.com/icons2/1148/PNG/512/1486503780-board-buffer-clip-poll-survey-form-clipboard_81262.png")
    .addField("Répondre au sondage à l'aide des réaction :", 
    `
    👍 - Oui / Pour
    ❔ - Neutre / Pas d'avis
    👎 - Non / Contre
    `)
    .setTimestamp()
    .setFooter("Vous aussi créez un sondage avec la commande +poll <question> !")

  const poll = await message.channel.send(embed);
  await poll.react("👍");
  await poll.react("❔");
  await poll.react("👎");
};

module.exports.help = MESSAGES.COMMANDS.FUN.POLL;