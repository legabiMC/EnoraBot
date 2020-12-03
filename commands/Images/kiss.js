//API LINK : https://api.tenor.com/v1/random?q=animekiss&key=4OFXWA0UABHE&limit=1

const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async(client, message, args) => {
    let member = message.member;
    if (args[0]) member = message.guild.member(message.mentions.users.first());
    let user = member.user;

    const kiss = await fetch("https://api.tenor.com/v1/random?q=animekiss&key=4OFXWA0UABHE&limit=1")
        .then(res => res.json())
        .then(json => json.results[0].media[0].gif.url);

    const embed = new MessageEmbed()
        .setAuthor(`On te fait un gros bisous ${user.username} !`)
        .setColor("#ff82e0")
        .setImage(kiss)

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.KISS;