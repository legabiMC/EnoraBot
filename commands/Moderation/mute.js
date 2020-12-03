const { MESSAGES } = require("../../util/constants");
const ms = require("ms");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = async(client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let member = message.mentions.members.first();
    let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
    let reason = (args.splice(2).join(' ') || 'Aucune raison spécifiée');
    let muteTime = (args[1] || '60s');

    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'Muted',
                color: '#818386',
                permissions: []
            }
        });

        message.guild.channels.cache.forEach(async(channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    };

    await user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> est mute pendant **${ms(ms(muteTime))}** pour **${reason}**.`)

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));

    const embed = new MessageEmbed()
        .setAuthor(`${member.user.username} (${user.id})`)
        .setColor("#287db5")
        .setDescription(`**Action**: Mute\n**Durée**: ${ms(ms(muteTime))}\n**Raison**: ${reason}`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('686258264920686598').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;