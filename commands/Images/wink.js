const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  let member = message.member;
  if (args[0]) member = message.guild.member(message.mentions.users.first());
  let user = member.user;

  const wink =  await fetch("https://some-random-api.ml/animu/wink")
    .then(res => res.json())
    .then(json => json.link);

  const embed = new MessageEmbed()
    .setAuthor(`Tu fais un clin d'oeil à ${user.username} ;)`)
    .setColor("#ff82e0")
    .setImage(wink)

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.WINK;