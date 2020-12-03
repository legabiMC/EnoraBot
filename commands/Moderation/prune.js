const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = async(client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());

    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) {
        return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100 !');
    }

    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length = Math.min(args[1], messages.length);

    if (messages.length === 0 || !user) {
        return message.reply('Cet utilisateur n\'existe pas OU n\'a pas envoyé de message !');
    }

    if (messages.length === 1) {
        await messages[0].delete();
    } else {
        await message.channel.bulkDelete(messages);
    }

    message.delete();
    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`)
        .setColor("#287db5")
        .setDescription(`**Action**: Prune\n**Messages supprimés**: ${args[1]}\n**Utilisateur**: ${args[0]}\n**Salon**: ${message.channel}`)
        .setThumbnail(user.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('686258264920686598').send(embed)
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PRUNE;