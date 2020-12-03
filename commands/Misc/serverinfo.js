const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
    message.guild.members.fetch().then(fetchAll => {
        const guild = message.guild;
        const online = fetchAll.filter(m => m.presence.status === "online");
        const idle = fetchAll.filter(m => m.presence.status === "idle");
        const dnd = fetchAll.filter(m => m.presence.status === "dnd");
        const offline = fetchAll.filter(m => m.presence.status === "offline");

        const embed = new MessageEmbed()
            .setColor("#C016FF")
            .setThumbnail(guild.iconURL())
            .setAuthor(`Plus d'informations à propos de : ${guild.name}`)
            .addField(`Statistiques :`,
                `🆔 ▪ **ID :** ${guild.id}
      👑 ▪ **Administrateur :** ${guild.owner.user.tag} (${guild.ownerID})
      📊 ▪ **Nombre de rôles :** ${guild.roles.cache.size}
      ⏲ ▪ **Créé le :** ${moment(guild.createdAt).format('DD/MM/YYYY')}

      💬 ▪ **Nombre de salons textuels :** ${guild.channels.cache.filter(ch => ch.type === "text").size}
      🔊 ▪ **Nombre de salons vocaux :** ${guild.channels.cache.filter(ch => ch.type === "voice").size}
        
      🟢 ▪ ${online.size} membres **en ligne**.
      🟡 ▪ ${idle.size} membres **absents**.
      🔴 ▪ ${dnd.size} membres **occupés**.
      ⚫ ▪ ${offline.size} membres **hors-ligne**.
      👥 ▪ Sur ${guild.memberCount -1} membres au **total**.
      `, true
            );

        message.channel.send(embed);
    });
};

module.exports.help = MESSAGES.COMMANDS.MISC.SERVERINFO;