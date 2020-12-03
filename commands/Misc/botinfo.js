const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
        .setColor("#B4E0E0")
        .setAuthor(`Infos sur ${client.user.username}`, client.user.avatarURL())
        .setThumbnail("https://icon-icons.com/icons2/665/PNG/128/robot_icon-icons.com_60269.png")
        .addFields({ name: '📝 Mémoire', value: `\`${(process.memoryUsage().heapUsed / 1024 /1024).toFixed(2)}MB\``, inline: true }, { name: '⏰ UpTime', value: `\`${Math.floor(client.uptime / 1000 / 60).toString()} minutes\``, inline: true }, { name: '\u200b', value: `\u200b`, inline: true }, { name: '🤝 Serveurs', value: `\`${client.guilds.cache.size.toString()}\``, inline: true }, { name: '💬 Salons', value: `\`${client.channels.cache.size.toString()}\``, inline: true }, { name: '👥 Utilisateurs', value: `\`${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}\``, inline: true }, { name: '❓ Version', value: `\`discord.js@12.2.0\``, inline: true }, { name: '👑 Source', value: `\`YpnoZ#0001\``, inline: true }, );

    message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.BOTINFO;