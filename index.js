const { Client } = require('discord.js')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})
let mode = 0;
let gif = ["https://tenor.com/view/plague-doctor-dance-gif-19130639", "https://tenor.com/view/he-hehe-boy-boi-boyi-gif-7890844", "https://tenor.com/view/why-do-you-cum-cum-cyberpunk-gif-19751361", "https://tenor.com/view/dead-cat-cpr-funny-animals-cute-revive-gif-13712625"];
let loop = true;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function reload(){
    loop=true;
}

client.on('ready', () => {

    console.log('Le bot est connecté !')
    let prfix = "Alain";

    client.user.setActivity('Fortnite', {
        type: 'PLAYING'
    })

    client.on('message', (message) => {
    
            if(message.author.username != "Eurêka" )
            {
                if(mode===1 && loop)
                {
                    message.reply("Tocard");
                    loop=false;

                }

            }   


            if(mode!=2)
            {
                if(message.content === prfix+", GIF"&& loop)
                {
                    let rdm = getRandomInt(gif.length);
                    message.reply(gif[rdm]);
                    loop=false;

                }
            }
            if(message.author.username === "Eurêka")
            {
                    if(message.content === prfix+", qui est ton guide?" && loop)
                    {
                        message.channel.send("Toi  :pray:");
                        loop=false;

                    }
                    if(message.content === prfix+", pourquoi es-tu nul?" && loop)
                    {
                        message.channel.send("Demande à David :snake:");
                        loop=false;

                    }
                    if(message.content === prfix+", mode 1" && loop)
                    {
                        message.channel.send("Oké ! :nerd:");
                        mode=1;
                        loop=false;

                    }
                    if(message.content === prfix+", mode 2" && loop)
                    {
                        message.channel.send("Mode 2, reçu");
                        mode=2;
                        loop=false;

                    }
                    if(message.content === prfix+", mode 0" && loop)
                    {
                        message.channel.send("Fait!");
                        mode=0;
                        loop=false;
                    }
                    if(message.content === prfix+", t'es en quel mode?"&& loop )
                    {
                        message.channel.send("Euh att bg...");
                        message.channel.send("Mode "+mode+" bg");
                        loop=false;
                    }
                }  
                setTimeout(reload, 1000)
            
    })

})

client.login(process.env.TOKEN);
