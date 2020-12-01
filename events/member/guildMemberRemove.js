const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .addField("Départ :", `${member.displayName} a quitté le serveur`)
    .setTimestamp();
  
  client.channels.cache.get('686258264920686598').send(embed)
}