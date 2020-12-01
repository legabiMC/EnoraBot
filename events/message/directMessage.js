const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
    const user = message.author;
    if (user.bot) return;

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#0040ff")
        .setDescription(`**Action**: Ticket opened\n**Content**: ${message.content}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    user.send("Your ticket has been sent. Moderation team will answer you as soon as possible :D");
    client.channels.cache.get('765960236053037097').send(embed);
}