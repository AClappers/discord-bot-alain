const { Client } = require('discord.js')
const config = require('./config.json')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})
let mode = 0;
client.on('ready', () => {
    console.log('Le bot est connecté !')

    client.user.setActivity('Fortnite', {
        type: 'PLAYING'
    })

    client.on('message', (message) => {
    if(message.author.username != "Eurêka" )
    {
        if(mode===1)
        {
            message.reply("Tocard");
        }

    }   


    if(mode!=2)
    {

    }
    if(message.author.username === "Eurêka")
    {
        if(message.content === "Bot, qui est ton guide?" && message.author.username=== "Eurêka")
        {
            message.channel.send("Toi  :pray:");
        }
        if(message.content === "Bot, pourquoi es-tu nul?" && message.author.username=== "Eurêka")
        {
            message.channel.send("Demande à David :snake:");
        }
        if(message.content === "Bot, mode 1" && message.author.username=== "Eurêka")
        {
            message.channel.send("Oké ! :nerd:");
            mode=1;
        }
        if(message.content === "Bot, mode 2" && message.author.username=== "Eurêka")
        {
            message.channel.send("Mode 2, reçu");
            mode=2;
        }
        if(message.content === "Bot, mode 0" && message.author.username=== "Eurêka")
        {
            message.channel.send("Fait!");
            mode=0;
        }
    }         
    })
})

client.login(process.env.TOKEN);