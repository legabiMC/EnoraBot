const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports.run = (client, message, args) => {
  var countDownDate = new Date("Dec 1, 2020 22:00:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  }, 1000);

  const embed = new MessageEmbed()
    .setColor("#dc143c")
    .setTitle("Titre de l'embed de Test")
    .setDescription("Description de l'embed de Test")
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes.`)
    .setTimestamp()

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.EMBED;