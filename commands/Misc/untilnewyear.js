const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const { DateTime } = require('luxon');

module.exports.run = async (client, message, args) => {

  message.channel.send(`Nous sommes le ${DateTime.local().setZone('France/Paris')}`)
};

module.exports.help = MESSAGES.COMMANDS.MISC.UNTILNEWYEAR;