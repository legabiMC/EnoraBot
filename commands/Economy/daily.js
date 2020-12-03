const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const dailyCD = 8.64e+7;
  if (!dbUser.balance) await client.updateUser(message.member, { balance: 0 });

  const lastDaily = await dbUser.daily;
  if (lastDaily !== null && dailyCD - (Date.now() - lastDaily) > 0) {
    const cdTime = dailyCD - (Date.now() - lastDaily);
    message.reply(`**Erreur !** Il te reste **${Math.floor(cdTime / (1000*60*60) % 24)}** heures, **${Math.floor(cdTime / (1000*60) % 60)}** minutes et **${Math.floor(cdTime / (1000) % 60)}** secondes à attendre pour reçevoir ta paye journalière !`);
  } else {
    client.addBalance(client, message.member, 1000);
    client.updateUser(message.member, { daily: Date.now() });
    message.reply(`Tu viens de récupérer ta paye journalière de **1000** EC !`);
  }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.DAILY;