const { MessageCollector, MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message) => {
  const embed = new MessageEmbed()
    .setAuthor("Top 10 des utilisateurs sur le serveur :")
    .setColor("#a41f14")
    .setThumbnail("https://nationalpostcom.files.wordpress.com/2015/09/543165048.jpg?quality=100&strip=all&w=642")
    .setTimestamp()
    .setFooter("Experience")

  await client.getUsers(message.guild).then(p => {
    p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).forEach(e => {
      embed.addField(e.username, `🏅 Niveau : ${e.level} | 📊 ${e.experience} points d'experience`);
    });
  });

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD;