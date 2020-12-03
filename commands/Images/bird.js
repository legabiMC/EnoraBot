const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async(client, message, args) => {
    const bird = await fetch("https://some-random-api.ml/img/birb")
        .then(res => res.json())
        .then(json => json.link);

    const embed = new MessageEmbed()
        .setColor("#0047a3")
        .setImage(bird)

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.BIRD;