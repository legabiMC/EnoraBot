module.exports = client => {
  console.log(`Pret en tant que ${client.user.tag}!`);
  client.once("ready", () => {
    console.log("I am ready!");
    client.manager.init(client.user.id);
  });
  
  var c = 1200
  var cf = 100
  setInterval(() => c = c-1, 60000)

  setInterval(() =>
  {if (c>=60) {
    var heures = Math.floor(c/60);
    var minutes = c-(heures*60)
    cf = `${heures} heures et ${minutes} minutes`
  } else {
    cf = `${c} minutes`
  }}, 5001);

  setInterval(() => activities = `${cf} avant Galactus !`, i = 0, 5000);


  setInterval(() => client.user.setPresence({ activity: { name: `${activities}`, type: 'WATCHING' }, status: 'dnd' }), 5000);
  //let activities = ['la commande +help', `ses ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, 'son créateur : YpnoZ', 'le stream d\'Enora'], i = 0;
}