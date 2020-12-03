const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { TOKEN } = require('./config');

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
require("./database/functions")(client);
client.config = require("./config");
client.mongoose = require("./database/mongoose");
["commands", "musicPlayer"].forEach(x => client[x] = new Collection());

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(client.config.TOKEN);