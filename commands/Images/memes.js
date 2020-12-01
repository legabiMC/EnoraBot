const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const meme =  await fetch("https://some-random-api.ml/meme")
    .then(res => res.json())
    .then(json => json.image);

  const embed = new MessageEmbed()
    .setColor("#fff700")
    .setImage(meme)

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.MEMES;