# EnoraBot ![Work in progress](http://www.repostatus.org/badges/latest/wip.svg)
Bot Discord pour le bot d'Enora !

Create file name: config.js

```javascript
module.exports = {
    token: "(token here)",
    asPrefix: "+",
    useDBPrefix: "true",
    connectDatabase: "mongodb://localhost:27017/(database)",
    defaultSettings: {
        prefix: "+",
        logChannel: "logs🔎",
        welcomeMessage: "Bienvenue {{user}} !"
    }
}
```