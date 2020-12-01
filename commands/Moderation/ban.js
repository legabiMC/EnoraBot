const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = async(client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("Please mention a user");
    let reason = args.slice(1)[0] ? args.slice(1).join(" ") : "No reason";
    const embed = new MessageEmbed()
        .setAuthor(`${member.user.username} (${member.id})`)
        .setColor("#dc143c")
        .setDescription(`**Action**: Ban\n**Raison**: ${reason}`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('686258264920686598').send(embed)
        .then(() => member.ban({ reason: reason }));
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;