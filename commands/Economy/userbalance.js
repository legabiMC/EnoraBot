const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(`💰 Voici l'argent de ${user} : **${mentionnedUser.balance}** EC.`)
  } else {
    message.reply(` 💰 Voici ton argent : **${dbUser.balance}** EC.`)
  }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.USERBALANCE;