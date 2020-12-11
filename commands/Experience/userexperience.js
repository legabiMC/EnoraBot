const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(`${user}, 🏅 Niveau : ${mentionnedUser.level} | 📊 ${mentionnedUser.experience} points d'experience.`)
  } else {
    message.reply(` 🏅 Niveau : ${dbUser.level} | 📊 ${dbUser.experience} points d'experience.`)
  }
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;