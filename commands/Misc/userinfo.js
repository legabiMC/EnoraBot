const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
        //member = Guildmember | user = User
        let member = message.member;
        if (args[0]) member = message.guild.member(message.mentions.users.first());
        let user = member.user;

        const embed = new MessageEmbed()
            .setColor("#CCE0B4")
            .setAuthor(`Carte d'identité de ${user.username}`)
            .setThumbnail(user.displayAvatarURL())
            .addField(`Infos :`,
                `👤 ▪ **Nom :** ${user.tag}
    👥 ▪ **Surnom :** ${member.nickname === null ? '**Aucun**' : `${member.nickname}`}
    
    🤖 ▪ **Bot:** ${user.bot ? 'Oui' : 'Non'}
    ⏰ ▪ **Compte créé le :** ${moment(user.createdAt).format('DD/MM/YYYY | hh:mm')}
    ❔ ▪ **Statut :** ${user.presence.status.toUpperCase()}
    
    🥳 ▪ **Rejoint le :** ${moment(member.joinedAt).format('DD/MM/YYYY | hh:mm')}
    🚩 ▪ **Rôles :** ${member.roles.cache.filter(r => r.name !== "@everyone").map(roles => `\`${roles.name}\``).join(", ")}`
    )

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;