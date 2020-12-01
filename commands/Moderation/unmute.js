const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let member = message.mentions.members.first();
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');

    if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas Mute !");

    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> a été unmute !`);

    const embed = new MessageEmbed()
        .setAuthor(`${member.user.username} (${user.id})`)
        .setColor("#35f092")
        .setDescription(`**Action**: Unmute`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('686258264920686598').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;