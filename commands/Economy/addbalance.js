const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const balanceToAdd = parseInt(args[1]);
  if (isNaN(balanceToAdd)) return message.reply("Tu veux lui ajouter 0 EC ? Non ? Alors rentre un montant idiot ! 🤪");
  client.addBalance(client, user, balanceToAdd);
  message.channel.send(`Vous avez ajouté avec succès **${balanceToAdd}** EC à ${user} !`);
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.ADDBALANCE;