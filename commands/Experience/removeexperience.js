const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToRemove = parseInt(args[1]);
  if (isNaN(expToRemove)) return message.reply("Faut rentrer un ***nombre*** d'XP à retirer idiot ! 🤪");
  client.removeExp(client, user, expToRemove);
  message.channel.send(`Vous avez supprimé avec succès ${expToRemove} points d'XP à ${user} !`);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.REMOVEEXPERIENCE;