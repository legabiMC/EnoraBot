const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const pikachu =  await fetch("https://some-random-api.ml/img/pikachu")
    .then(res => res.json())
    .then(json => json.link);

  const embed = new MessageEmbed()
    .setColor("#ffdd00")
    .setImage(pikachu)

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.PIKACHU;