const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const purgeImg = new MessageAttachment('./assets/img/delete.jpg');

module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100 !');

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: Purge\n**Messages supprimés**: ${args[0]}\n**Salon**: ${message.channel}`)
    .attachFiles(purgeImg)
    .setThumbnail('attachment://delete.jpg')
    .setTimestamp()

  client.channels.cache.get('686258264920686598').send(embed)
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;
