const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const ms = require('ms');

module.exports.run = async(client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) return message.channel.send('Merci de préciser un salon !');

    let giveawayDuration = args[1];
    if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
        return message.channel.send('Merci de préciser une durée valide pour le giveaway !')
    }

    let giveawayWinners = args[2];
    if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) {
        return message.channel.send('Merci de préciser un nombre valide de gagnant(s) !');
    }

    let giveawayPrize = args.slice(3).join(" ");
    if (!giveawayPrize) {
        return message.channel.send('Ok, je ne fais rien gagner. Radin !');
    }

    client.giveawaysManager.start(channel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayWinners,
        hostedBy: message.author,

        messages: {
            giveaway: "<@707402463833227264>\n\n**GIVEAWAY**",
            giveawayEnded: "<@707402463833227264>\n\n**GIVEAWAY TERMINÉ !**",
            timeRemaining: "Temps restant : **{duration}**",
            inviteToParticipate: "Réagi avec 🎉 pour participer !",
            winMessage: "Bravo {winners}, tu gagnes **{prize}** ! ",
            embedFooter: "Giveaway !!",
            noWinner: "Impossible de déterminer un gagnant !",
            hostedBy: "Propulsé par {user}.",
            winners: "gagnant(s)",
            endedAt: "Fini à",
            units: {
                seconds: "secondes",
                minutes: "minutes",
                hours: "heures",
                days: "jours",
                pluralS: false
            }
        }
    })
    message.channel.send(`Concours lancé dans ${channel}`);
};

module.exports.help = MESSAGES.COMMANDS.GIVEAWAYS.GIVEAWAYREROLL;