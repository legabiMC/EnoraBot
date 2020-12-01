const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = (client, message, args) => {
  const testRole = message.guild.roles.cache.get("757589729591034016");
  const retestRole = message.guild.roles.cache.get("757591019964465195");

  const testEmoji = message.guild.emojis.cache.get("745270997460189324");
  const retestEmoji = message.guild.emojis.cache.get("738047109483331715");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
    .setColor("#dc143c")
    .addField(
      "Les rôles disponibles :",
      `
      ${testEmoji} - ${testRole.toString()}
      ${retestEmoji} - ${retestRole.toString()}
      `
    );

    client.channels.cache.get('671042753525710889').send(embed).then(async msg => {
      await msg.react(testEmoji);
      await msg.react(retestEmoji);
    })
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;