const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTIwMzkxMjQ4NDQ0NTIyNTE3.DvADTA.b-nqyaj0nK923SL-tIW-l9o3h9k);//where BOT_TOKEN is the token of our bot
