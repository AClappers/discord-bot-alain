const { Client } = require('discord.js')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})
let mode = 0;
let gif = ["https://tenor.com/view/plague-doctor-dance-gif-19130639", "https://tenor.com/view/he-hehe-boy-boi-boyi-gif-7890844", "https://tenor.com/view/why-do-you-cum-cum-cyberpunk-gif-19751361", "https://tenor.com/view/dead-cat-cpr-funny-animals-cute-revive-gif-13712625"];
let loop = true;
let default_id = "754049600599621677";
let msg;

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
        if(message.channel.type !="dm")
        {
            let mainC = message.guild.channels.cache.get(default_id);

        }
        else
        {
            if(!message.author.bot && msg!=undefined)
            {
                msg.channel.send("De "+message.author.username+"  : "message.content);

            }
        }
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
                if(message.content === prfix+"?"&& loop)
                {
                    message.reply("Ici");
                    loop=false;

                }
                if((message.content.toUpperCase() === "CIMER "+prfix.toUpperCase() || message.content.toUpperCase() === "MRC "+prfix.toUpperCase() || message.content.toUpperCase() === "MERCI "+prfix.toUpperCase() ) && loop)
                {
                    message.channel.send("Tkt");

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
                    if(message.content === prfix+", id salon stp"&& loop )
                    {
                        message.channel.send("L'id du salon est : "+message.channel.id);

                        loop=false;
                    }
                    if(message.content === prfix+", mode 3"&& loop )
                    {
                        message.channel.send("Mode 3 activé");
                        mode=3;
                        loop=false;
                    }
                    if(message.content === prfix+", stop mode 3"&& loop )
                    {
                        message.channel.send("Mode 3 désactivé");
                        mode=0;
                        loop=false;
                    }
                    if(message.content === prfix+", change default_id"&& loop )
                    {
                        message.channel.send("Changé :cowboy:");
                        default_id = message.channel.id;
                        loop=false;
                    }
                    if(mode===3 && message.channel.type != "dm")
                    {
                        if(message.channel.id != mainC && message.content != prfix+", stop mode 3" && loop && mainC!=null)
                        {
                            mainC.send(message);
                        }
                 
                    }
                    if(message.content.startsWith(prfix+", dm "))
                    {
                        msg=message;
                        message.channel.send("Ok");
                        let mention = message.mentions.members.first();
                        if(mention != undefined)
                        {

                            let args = message.content.split(" ");
                            let str = "";
                            for(let i = 3 ; i < args.length ; i++)
                            {
                                str+=" "+args[i];
                            }

                            mention.createDM().then(channel => {
                               return channel.send(str);
                            }) ;

                        } 
                    }
                    
                }  
                setTimeout(reload, 1000);
            
    })

})


client.login(process.env.TOKEN);
