const { Client } = require('discord.js')
const config = require('./config.json')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})
let mode = 0;
let prefixe = "Alain";
let gif = ["https://tenor.com/view/plague-doctor-dance-gif-19130639", "https://tenor.com/view/he-hehe-boy-boi-boyi-gif-7890844", "https://tenor.com/view/why-do-you-cum-cum-cyberpunk-gif-19751361", "https://tenor.com/view/dead-cat-cpr-funny-animals-cute-revive-gif-13712625"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


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
        if(message.content === prefix+", GIF")
        {
            let rdm = getRandomInt(gif.length);
            message.channel.send(gif[rdm]);
        }
    }
    if(message.author.username === "Eurêka")
    {
        if(message.content === prefix+", qui est ton guide?" )
        {
            message.channel.send("Toi  :pray:");
        }
        if(message.content === prefix+", pourquoi es-tu nul?" )
        {
            message.channel.send("Demande à David :snake:");
        }
        if(message.content === prefix+", mode 1" )
        {
            message.channel.send("Oké ! :nerd:");
            mode=1;
        }
        if(message.content === prefix+", mode 2" )
        {
            message.channel.send("Mode 2, reçu");
            mode=2;
        }
        if(message.content === prefix+", mode 0" )
        {
            message.channel.send("Fait!");
            mode=0;
        }
        if(message.content === prefix+", t'es en quel mode?" )
        {
            message.channel.send("Euh att bg...");
            message.channel.send("Mode "+mode+" bg");
        }
    }         
    })
})

client.login(process.env.TOKEN);
