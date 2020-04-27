const Discord = require('discord.js');
const bot = new Discord.Client;
const PREFIX = "A."

bot.on('message', message => {
    if (message.author.bot) {
        return;
    };
    
    if (message.content === PREFIX + 'perms') {
        const perms = new Discord.MessageEmbed()

        perms.setColor('#ffffff');
        perms.setTitle("Avio Custom Commands");
        perms.addField("a.games", "Lists all games");
        perms.addField("a.atcr", "NOT STABLE, Creates a VChannel and host ATC radio");

        perms.setColor('#000000');

        message.channel.send(perms);
        };

        if (message.content === PREFIX + "games") {
            const glist = new Discord.MessageEmbed()

            glist.setTitle("All Avio games");
            glist.addField("Game1");
            glist.addField("Game2");
            glist.addField("Game3");

            glist.setColor('#000000');

            message.channel.send(glist);
        };
});


bot.on('ready', () => {
    console.log('Refreshed');
    bot.user.setActivity('ATCT / A.perms');
});

bot.login('NzAyNDUxOTgwMDg5NDI1OTUx.XqCNgQ.xKUK7OfDZS_1twuX3yRKyhi6t0E');