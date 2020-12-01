const { MessageEmbed } = require("discord.js");

module.exports = async(client, member) => {
    const embedLog = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#35f092")
        .addField(`Arrivée :`, `${member.displayName} a rejoint le serveur`)
        .setTimestamp();

    client.channels.cache.get('686258264920686598').send(embedLog)

    const embedDM = new MessageEmbed()
        .setAuthor(`Bienvenue ${member.user.username} sur le serveur d'Enora !`, member.user.displayAvatarURL())
        .setColor("#35f092")
        .addField("Amuse toi bien !", "Le Staff")

    member.send(embedDM);
}