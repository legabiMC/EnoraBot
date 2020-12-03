const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const getter = message.guild.member(message.mentions.users.first());
  const monnaie = parseInt(args[1]);
  if (dbUser.balance < monnaie) return message.reply(`Vous n'avez pas assez d'argent pour faire ça ! (${dbUser.balance} < ${monnaie})`);

  if (getter && (!isNaN(monnaie))) {
    try {
      message.channel.send(`Voulez-vous vraiment donner \`${monnaie} EC\` à ${getter} ? (oui)`);
      const filter = (m) => message.author.id === m.author.id;
      const userEntry = await message.channel.awaitMessages(filter, {
        max: 1, time: 10000, errors: ['time']
      });
      if (userEntry.first().content.toLowerCase() === "oui") {
        client.addBalance(client, getter, monnaie);
        client.removeBalance(client, message.member, monnaie);
        message.channel.send(`Payment effectué ! Vous avez envoyé \`${monnaie} EC\` à ${getter} ! (Votre porte monnaie : ${dbUser.balance - monnaie})`);
      }
    } catch(e) {
      message.channel.send("Payment annulé. Merci de confirmer votre payment en répondant `oui` la prochaine fois !");
    }
  } else {
    message.reply("Merci de mentionner un utilisateur à payer et de fournir un montant à virer !");
  }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.PAY;