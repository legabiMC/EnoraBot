const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = async (client, message, args) => {
  //message.react('⭐');
  //message.react('701512685375979562');
  //🟥🟦🟩

  await message.react('🟥');
  await message.react('🟦');
  await message.react('🟩');
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.EMOJI;