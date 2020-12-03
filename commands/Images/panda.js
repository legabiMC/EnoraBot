const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async(client, message, args) => {
    const panda = await fetch("https://some-random-api.ml/img/panda")
        .then(res => res.json())
        .then(json => json.link);

    const embed = new MessageEmbed()
        .setColor("#000000")
        .setImage(panda)

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.PANDA;