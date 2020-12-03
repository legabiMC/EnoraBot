const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setColor("#d54e12")
        .setTitle("Lancement de dé !")
        .attachFiles(diceImg)
        .setThumbnail('attachment://dice.png')
        .addFields({ name: 'Chiffre obtenu :', value: randomDice(), inline: false })

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.RANDOMNUMBER;