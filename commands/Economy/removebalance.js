const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const balanceToRemove = parseInt(args[1]);
  if (isNaN(balanceToRemove)) return message.reply("Pourquoi voudrais-tu voler 0 EC ? Rentre un montant à voler idiot ! 🤪");
  client.removeBalance(client, user, balanceToRemove);
  message.channel.send(`Vous avez retiré avec succès **${balanceToRemove}** EC à ${user} !`);
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.REMOVEBALANCE;