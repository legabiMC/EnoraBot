const MESSAGES = {
    COMMANDS: {
        MISC: {
            PING: {
                name: 'ping',
                aliases: ['ping'],
                category: 'misc',
                description: 'pong',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            UNTILNEWYEAR: {
                name: '2021',
                aliases: ['2021'],
                category: 'misc',
                description: 'Renvoie le nombre de jours avant 2021',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            EMBED: {
                name: 'embed',
                aliases: ['embed'],
                category: 'misc',
                description: 'Test d\'embed',
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
            HELP: {
                name: 'help',
                aliases: ['help'],
                category: 'misc',
                description: 'Affiche les commandes et les syntaxes du Bot.',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            STATS: {
                name: 'stats',
                aliases: ['stats'],
                category: 'misc',
                description: 'Renvoie les informations du serveur.',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            RANDOMNUMBER: {
                name: 'random',
                aliases: ['roll', 'dice', 'dé'],
                category: 'misc',
                description: 'Renvoie la valeur d\'un dé !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            USERINFO: {
                name: 'userinfo',
                aliases: ['uinfo', 'whois'],
                category: 'misc',
                description: 'Affiche tes informations ou celle d\'un utilisateur mentionné.',
                usage: '[@user]',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            SERVERINFO: {
                name: 'serverinfo',
                aliases: ['serverinfo', 'sinfo'],
                category: 'misc',
                description: 'Affiche les informations du serveur actuel !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BOTINFO: {
                name: 'botinfo',
                aliases: ['botinfo', 'binfo'],
                category: 'misc',
                description: 'Affiche les informations du bot !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
        },
        ANNOUNCEMENTS: {
            ANNOUNCEMENT: {
                name: 'annonce',
                aliases: ['annonce'],
                category: 'announcements',
                description: 'Faire une annonce',
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
        },
        MODERATION: {
            BAN: {
                name: 'ban',
                aliases: ['ban'],
                category: 'moderation',
                description: 'Banni un membre du serveur.',
                usage: '<@user> (raison)',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            KICK: {
                name: 'kick',
                aliases: ['kick'],
                category: 'moderation',
                description: 'Expulse un membre du serveur.',
                usage: '<@user> (raison)',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            MUTE: {
                name: 'mute',
                aliases: ['mute'],
                category: 'moderation',
                description: 'Rendre muet un utilisateur.',
                usage: '<@user> (durée)',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            PRUNE: {
                name: 'prune',
                aliases: ['prune'],
                category: 'moderation',
                description: 'Supprime un nombre donné des messages d\'un utilisateur donné.',
                usage: '<@user> <nbre_message>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
            PURGE: {
                name: 'purge',
                aliases: ['purge'],
                category: 'moderation',
                description: 'Supprime un nombre donné de messages.',
                usage: '<nbre_message>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            UNBAN: {
                name: 'unban',
                aliases: ['unban'],
                category: 'moderation',
                description: 'Révoque le bannissement d\'un membre.',
                usage: '<user_id>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            UNMUTE: {
                name: 'unmute',
                aliases: ['unmute'],
                category: 'moderation',
                description: 'Supprimer le mute d\'un utilisateur.',
                usage: '<@user>',
                isUserAdmin: true,
                permissions: true,
                args: true
            },
        },
        REACTIONS: {
            ALLROLES: {
                name: 'allroles',
                aliases: ['allroles'],
                category: 'reactions',
                description: 'Renvoie un message avec des réactions !',
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
            EMOJI: {
                name: 'emoji',
                aliases: ['emoji'],
                category: 'reactions',
                description: 'Renvoie des emojis sur notre message !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            }
        },
        ADMIN: {
            // EVAL: {
            //   name: 'eval',
            //   aliases: ['eval'],
            //   category: 'admin',
            //   description: 'Renvoie un code JavaScript testé',
            //   usage: '<codeNeedTest>',
            //   isUserAdmin: false,
            //   permissions: true,
            //   args: true
            // },
            // CONFIG: {
            //   name: 'config',
            //   aliases: ['config'],
            //   category: 'admin',
            //   description: 'Modifier la base de données',
            //   usage: '<key> <value>',
            //   isUserAdmin: false,
            //   permissions: true,
            //   args: true
            // },
            RELOAD: {
                name: 'reload',
                aliases: ['reload'],
                category: 'admin',
                description: 'Redémarre le Bot !',
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
        },
        COLLECTORS: {
            MSGCOLLECTOR: {
                name: 'msgcollector',
                aliases: ['msgcollector', 'mcol'],
                category: 'collectors',
                description: 'Message collector',
                usage: '<message_à_collecter>',
                isUserAdmin: false,
                permissions: true,
                args: true
            },
            REACTCOLLECTOR: {
                name: 'reactcollector',
                aliases: ['reactcollector', 'rcol'],
                category: 'collectors',
                description: 'Reactions collector',
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
        },
        // EXPERIENCE: {
        //   USEREXPERIENCE: {
        //     name: 'userexperience',
        //     aliases: ['userexperience', 'uexp', 'level'],
        //     category: 'experience',
        //     description: 'Affiche ton nombre de points d\'XP !',
        //     usage: '',
        //     isUserAdmin: false,
        //     permissions: false,
        //     args: false
        //   },
        //   ADDEXPERIENCE: {
        //     name: 'addexperience',
        //     aliases: ['addexperience', 'addexp'],
        //     category: 'experience',
        //     description: 'Donne de l\'xp à un utilisateur !',
        //     usage: '<@user> <XPToAdd>',
        //     isUserAdmin: false,
        //     permissions: true,
        //     args: true
        //   },
        //   REMOVEEXPERIENCE: {
        //     name: 'removeexperience',
        //     aliases: ['removeexperience', 'removeexp'],
        //     category: 'experience',
        //     description: 'Retire de l\'xp à un utilisateur !',
        //     usage: '<@user> <xp_à_enlever>',
        //     isUserAdmin: false,
        //     permissions: true,
        //     args: true
        //   },
        //   LEADERBOARD: {
        //     name: 'leaderboard',
        //     aliases: ['leaderboard', 'top'],
        //     category: 'experience',
        //     description: 'Affiche le Top 10 des utilisateur ayant le + d\'XP sur le serveur !',
        //     usage: '',
        //     isUserAdmin: false,
        //     permissions: true,
        //     args: false
        //   },
        // },
        FUN: {
            EIGHTBALL: {
                name: '8ball',
                aliases: ['8ball'],
                category: 'fun',
                description: 'La boule magique vous répond !',
                usage: '<question>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            POLL: {
                name: 'poll',
                aliases: ['poll', 'sondage'],
                category: 'fun',
                description: 'Lance un simple sondage',
                usage: '<sondage>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
        },
        IMAGES: {
            CAT: {
                name: 'cat',
                aliases: ['cat', 'chat', 'miaou'],
                category: 'images',
                description: 'MIAOU !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            DOG: {
                name: 'dog',
                aliases: ['dog', 'chient', 'waf'],
                category: 'images',
                description: 'WAF WAF !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            FOX: {
                name: 'fox',
                aliases: ['fox', 'renard'],
                category: 'images',
                description: 'Un beau et gentil renard !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            MEMES: {
                name: 'memes',
                aliases: ['memes', 'meme', 'lol'],
                category: 'images',
                description: 'Cro marran !!!',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            PANDA: {
                name: 'panda',
                aliases: ['panda'],
                category: 'images',
                description: 'CRO MEUGNOOON !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            BIRD: {
                name: 'bird',
                aliases: ['bird', 'oiseau', 'cuicui'],
                category: 'images',
                description: 'CUI CUI',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            KOALA: {
                name: 'koala',
                aliases: ['koala'],
                category: 'images',
                description: 'CRO MEUGNOOON² !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            RED_PANDA: {
                name: 'red-panda',
                aliases: ['red-panda'],
                category: 'images',
                description: 'Regardez moi sa petite bouille :o',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            PIKACHU: {
                name: 'pikachu',
                aliases: ['pikachu', 'pika-pika'],
                category: 'images',
                description: 'PIKA PIKA CHUUUUUUUUUUUU',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            WINK: {
                name: 'wink',
                aliases: ['wink'],
                category: 'images',
                description: 'Fait ton meilleur clin d\'oeil !',
                usage: '<@user>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            PAT: {
                name: 'pat',
                aliases: ['pat', 'bon-toutou'],
                category: 'images',
                description: 'Bon toutou !',
                usage: '<@user>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            HUG: {
                name: 'hug',
                aliases: ['hug', 'calin'],
                category: 'images',
                description: 'Fait un calin à qui tu veux (COVID-friendly)',
                usage: '<@user>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
            KISS: {
                name: 'kiss',
                aliases: ['kiss', 'bisou', 'bisous'],
                category: 'images',
                description: 'Fait un bisous à qui tu veux (COVID-friendly)',
                usage: '<@user>',
                isUserAdmin: false,
                permissions: false,
                args: true
            },
        },
        GIVEAWAYS: {
            GIVEAWAYSTART: {
                name: 'gstart',
                aliases: ['gstart'],
                category: 'giveaways',
                description: 'Lance un giveaway !',
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false
            },
            GIVEAWAYREROLL: {
                name: 'greroll',
                aliases: ['greroll'],
                category: 'giveaways',
                description: 'Redésigne un nouveau gagnt pour le dernier concours.',
                usage: '',
                isUserAdmin: false,
                permissions: true,
                args: false
            },
        },
        // ECONOMY: {
        //   DAILY: {
        //     name: 'daily',
        //     aliases: ['daily', 'day'],
        //     category: 'economy',
        //     description: 'Récupère ta paye journalière !',
        //     usage: '',
        //     isUserAdmin: false,
        //     permissions: false,
        //     args: false
        //   },
        //   ADDBALANCE: {
        //     name: 'addbalance',
        //     aliases: ['addbalance', 'addbal', 'addEC'],
        //     category: 'economy',
        //     description: 'Ajoute de l\'argent à un utilisateur',
        //     usage: '<@user> <montant>',
        //     isUserAdmin: false,
        //     permissions: true,
        //     args: true
        //   },
        //   REMOVEBALANCE: {
        //     name: 'removebalance',
        //     aliases: ['removebalance', 'rbal', 'rEC'],
        //     category: 'economy',
        //     description: 'Enlève de l\'argent à un utilisateur',
        //     usage: '<@user> <montant>',
        //     isUserAdmin: false,
        //     permissions: true,
        //     args: true
        //   },
        //   SHOP: {
        //     name: 'shop',
        //     aliases: ['shop'],
        //     category: 'economy',
        //     description: 'Affiche le magasin du jour !',
        //     usage: '[objet]',
        //     isUserAdmin: false,
        //     permissions: false,
        //     args: false
        //   },
        //   USERBALANCE: {
        //     name: 'userbalance',
        //     aliases: ['userbalance', 'userbal', 'ubal'],
        //     category: 'economy',
        //     description: 'Affiche votre porte-monnaie ou celui d\'un utilisateur !',
        //     usage: '[@user]',
        //     isUserAdmin: false,
        //     permissions: false,
        //     args: false
        //   },
        //   PAY: {
        //     name: 'pay',
        //     aliases: ['pay'],
        //     category: 'economy',
        //     description: 'Envoie de l\'argent à l\'utilisateur mentionné.',
        //     usage: '<@user> <montant>',
        //     isUserAdmin: false,
        //     permissions: false,
        //     args: true
        //   },
        // },
    }
}

exports.MESSAGES = MESSAGES;