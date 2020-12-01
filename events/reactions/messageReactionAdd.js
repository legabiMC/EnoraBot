module.exports = async(client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '768920010189570120');

    if (messageReaction.partial) {
        await messageReaction.fetch();
        return;
    }

    const arabicRole = message.guild.roles.cache.get("768920851852034099");
    const chineseRole = message.guild.roles.cache.get("768920856129830983"); //changé
    const czechRole = message.guild.roles.cache.get("768920858520977448");
    const danishRole = message.guild.roles.cache.get("768920856498798655");
    const dutchRole = message.guild.roles.cache.get("768920857694175262");
    const englishRole = message.guild.roles.cache.get("721753723713486879"); //changé
    const finnishRole = message.guild.roles.cache.get("768920854498639912");
    const frenchRole = message.guild.roles.cache.get("749311640507383888"); //changé
    const germanRole = message.guild.roles.cache.get("768920854922395749");
    const hindiRole = message.guild.roles.cache.get("768921240407638048");
    const italianRole = message.guild.roles.cache.get("768921241066536961");
    const norwegianRole = message.guild.roles.cache.get("768921242119045210");
    const persianRole = message.guild.roles.cache.get("768921243302363146");
    const polishRole = message.guild.roles.cache.get("749311642382368828");
    const portugueseRole = message.guild.roles.cache.get("749311643808301157");
    const romanianRole = message.guild.roles.cache.get("749311645129375784");
    const russianRole = message.guild.roles.cache.get("749311646446649414");
    const croatianRole = message.guild.roles.cache.get("768921243730313237");
    const spanishRole = message.guild.roles.cache.get("749311647528648844"); //changé
    const swedishRole = message.guild.roles.cache.get("768921788691775529");
    const turkishRole = message.guild.roles.cache.get("723590100709146715"); //changé

    if (member.user.bot) return;

    if (["🇦🇪", "🇨🇳", "🇨🇿", "🇩🇰", "🇳🇱", "🇬🇧", "🇫🇮", "🇫🇷", "🇩🇪", "🇮🇳", "🇮🇹", "🇳🇴", "🇮🇷", "🇵🇱", "🇵🇹", "🇷🇴", "🇷🇺", "🇭🇷", "🇪🇸", "🇸🇪", "🇹🇷"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "🇦🇪":
                member.roles.add(arabicRole);
                break;
            case "🇨🇳":
                member.roles.add(chineseRole);
                break;
            case "🇨🇿":
                member.roles.add(czechRole);
                break;
            case "🇩🇰":
                member.roles.add(danishRole);
                break;
            case "🇳🇱":
                member.roles.add(dutchRole);
                break;
            case "🇬🇧":
                member.roles.add(englishRole);
                break;
            case "🇫🇮":
                member.roles.add(finnishRole);
                break;
            case "🇫🇷":
                member.roles.add(frenchRole);
                break;
            case "🇩🇪":
                member.roles.add(germanRole);
                break;
            case "🇮🇳":
                member.roles.add(hindiRole);
                break;
            case "🇮🇹":
                member.roles.add(italianRole);
                break;
            case "🇳🇴":
                member.roles.add(norwegianRole);
                break;
            case "🇮🇷":
                member.roles.add(persianRole);
                break;
            case "🇵🇱":
                member.roles.add(polishRole);
                break;
            case "🇵🇹":
                member.roles.add(portugueseRole);
                break;
            case "🇷🇴":
                member.roles.add(romanianRole);
                break;
            case "🇷🇺":
                member.roles.add(russianRole);
                break;
            case "🇭🇷":
                member.roles.add(croatianRole);
                break;
            case "🇪🇸":
                member.roles.add(spanishRole);
                break;
            case "🇸🇪":
                member.roles.add(swedishRole);
                break;
            case "🇹🇷":
                member.roles.add(turkishRole);
                break;
        };
    };
};