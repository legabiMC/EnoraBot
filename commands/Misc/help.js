const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const { readdirSync, read } = require("fs");
const { asPrefix } = require('../../config');
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings, member) => {
    if (!args.length) {
        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username}, voici la page d'aide d'EnoraBOT`, message.author.avatarURL())
            .setColor("#36393F")
            .setThumbnail("https://cdn.discordapp.com/avatars/699210020079927326/9672e7a61fdb2e1ef9d99fee7da2fd39.png")
            .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leurs commandes.\nPour plus d'information sur une commande, tapez \`${asPrefix}help <command>\``)

        for (const category of categoryList) {
            embed.addField(
                `${category}`,
                `\`${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}\``,
            );
        };

        return message.channel.send(embed);
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

        const embed = new MessageEmbed()
            .setColor("#36393F")
            .setTitle(`\`${command.help.name}\``)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL())
            .addField("Description", `${command.help.description}`)
            .addField("Utilisation", command.help.usage ? `${asPrefix}${command.help.name} ${command.help.usage}` : `${asPrefix}${command.help.name}`, true)

        if (command.help.aliases.length > 1) embed.addField("Aliases", `${command.help.aliases.join(', ')}`, true)
        return message.channel.send(embed);
    }
};

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;