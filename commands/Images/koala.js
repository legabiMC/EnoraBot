const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async(client, message, args) => {
    const koala = await fetch("https://some-random-api.ml/img/koala")
        .then(res => res.json())
        .then(json => json.link);

    const embed = new MessageEmbed()
        .setColor("#b3b3b3")
        .setImage(koala)

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.KOALA;