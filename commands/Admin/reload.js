const { MESSAGES } = require("../../util/constants");
 
module.exports.run = async (client, message, args) => {
  await message.delete();
  await client.channels.cache.get('604361447195279373').send("💡 Redémarrage du Bot...");
  process.exit();
};
 
module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;