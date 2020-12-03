const { Collection } = require('discord.js');
const { PREFIX } = require('../../config');

module.exports = async(client, message) => {
    // const settings  = await client.getGuild(message.guild);
    // const dbUser = await client.getUser(message.member);

    if (message.channel.type === "dm") {
        return client.emit("directMessage", message);
    }

    if (message.author.bot) {
        return;
    }
    // if (!dbUser) await client.createUser({
    //   guildID: message.member.guild.id,
    //   guildName: message.member.guild.name,
    //   userID: message.member.id,
    //   username: message.member.user.tag,
    // });
    // const expCd = Math.floor(Math.random() * 19) + 1;
    // const expToAdd = Math.floor(Math.random() * 25) + 10;

    // if (expCd >= 8 && expCd <= 11) await client.updateExp(client, message.member, expToAdd);


    if (!message.content.startsWith(PREFIX)) {
        return;
    }

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) {
        return;
    }

    if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply("**Error !** You don't have the permission to do that !");
    }

    if (command.help.args && !args.length) {
        let noArgsReply = `Wrong command use, ${message.author} !`;

        if (command.help.usage) noArgsReply += `\nUse : \`${PREFIX}${command.help.name} ${command.help.usage}\``;

        return message.channel.send(noArgsReply);
    };

    if (command.help.isUserAdmin && !user) {
        return message.reply('Please, mention a user !');
    }

    if (command.help.isUserAdmin && message.mentions.members) {
        if (message.mentions.members.first().hasPermission('BAN_MEMBERS')) {
            return message.reply("**Error !** You can't do that on this user !");
        }
    };

    command.run(client, message, args
        //, settings, dbUser
    );
};