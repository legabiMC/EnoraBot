const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const fox =  await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image);

  const embed = new MessageEmbed()
    .setColor("#eb7500")
    .setImage(fox)

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.FOX;