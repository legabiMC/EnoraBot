 const mongoose = require("mongoose");
 const { defaultSettings: defaults, useDBPrefix, asPrefix, } = require("../config");

 const guildSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     guildID: String,
     guildName: String,
     prefix: {
         "type": String,
         "default": useDBPrefix ? defaults.prefix : asPrefix
     },
     logChannel: {
         "type": String,
         "default": defaults.logChannel
     },
 });

 module.exports = mongoose.model("Guild", guildSchema);