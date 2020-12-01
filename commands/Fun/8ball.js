const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const replies = ["Oui", "Non", "Peut-être"];
  const question = args.join(" ");
  const reponse = Math.floor(Math.random() * replies.length);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#cb4e41")
    .setThumbnail("https://www.magicball-8.com/assets/images/magic8ball-module/magic8ball-recto.png")
    .addField(question, replies[reponse]);

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.FUN.EIGHTBALL;