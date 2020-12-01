const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async(client, message, args) => {
    const rpanda = await fetch("https://some-random-api.ml/img/red_panda")
        .then(res => res.json())
        .then(json => json.link);

    const embed = new MessageEmbed()
        .setColor("#ff6f00")
        .setImage(rpanda)

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.RED_PANDA;