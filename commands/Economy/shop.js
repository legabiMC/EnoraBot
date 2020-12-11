const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const items = [];
  const shop = require("../../assets/shop/shop.json");
  const q = args.join(" ");
  const position = shop
    .map((e) => e.name.toLowerCase())
    .indexOf(q.toLowerCase());
  if (q && position == -1) message.reply("Cet objet n'existe pas !");

  const embed = new MessageEmbed()
    .setTitle("Voici le magasin du jour !")
    .setColor("#f54242")
    .setThumbnail("https://zupimages.net/viewer.php?id=20/41/hl5i.png");

  if (q && position !== -1) {
    try {
      const item = shop[position];
      message.channel.send(`Voulez-vous vraiment acheter \`${item.name.toLowerCase()}\` pour \`${item.prix} EC\` ? (oui)`);
      const filter = (m) => message.author.id === m.author.id;
      const userEntry = await message.channel.awaitMessages(filter, {
        max: 1,
        time: 10000,
        errors: ['time'],
      });

      if (userEntry.first().content.toLowerCase() === "oui") {
        client.removeBalance(client, message.member, item.prix);
        message.channel.send(`Merci pour votre achat ! Vous possédez maintenant \`${dbUser.balance - item.prix} EC\` dans votre porte-monnaie !`);
        message.member.send(item.objet);
      }
    } catch(e) {
      message.channel.send("Achat annulé. Merci de confirmer votre achat en répondant `oui` la prochaine fois.");
    }
  } else {
    shop.map((e) => items.push(`${e.name} (${e.prix} EC)`));
    embed.setDescription(
      `Voici les objets disponibles à l'achat:\n${items
        .map((item) => `**${item}**`)
        .join("\n")}`
    );
    message.channel.send(embed);
  }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.SHOP;
