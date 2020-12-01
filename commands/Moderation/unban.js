const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const unbanImg = new MessageAttachment('./assets/img/unban.png');

module.exports.run = async(client, message, args) => {
    let member = await client.users.fetch(args[0]);
    if (!member) return message.reply("L'utilisateur n'existe pas ou n'est pas banni !");
    message.guild.members.unban(member);

    const embed = new MessageEmbed()
        .setAuthor(`(${member.id})`)
        .setColor("#35f092")
        .setDescription(`**Action**: Unban`)
        .attachFiles(unbanImg)
        .setThumbnail('attachment://unban.png')
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('686258264920686598').send(embed)
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;