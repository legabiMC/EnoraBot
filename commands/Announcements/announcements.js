const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let channel = args[0];
  if (!channel) return message.channel.send("Veuillez rentrer l'ID d'un salon");
  let announcement = "Pas d'annonce fournie";
  if (args[1]) announcement = args.slice(1).join(" ");
  const embed = new MessageEmbed()
    .setAuthor(`Actualités hebdomadaires :`)
    .setThumbnail('https://cdn.discordapp.com/icons/604334473705685003/a_be103d71398917da4f9f6c06b0dc8ff3.gif')
    .setColor("#e60307")
    .setDescription(`${announcement}`)
    .setTimestamp()

  client.channels.cache.get(`${channel}`).send(embed)
};

module.exports.help = MESSAGES.COMMANDS.ANNOUNCEMENTS.ANNOUNCEMENT;