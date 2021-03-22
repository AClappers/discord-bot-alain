//Require
const { Client, TeamMember } = require('discord.js')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})

//vars
let mode = 0;
let gif = ["https://tenor.com/view/plague-doctor-dance-gif-19130639", "https://tenor.com/view/he-hehe-boy-boi-boyi-gif-7890844", "https://tenor.com/view/why-do-you-cum-cum-cyberpunk-gif-19751361", "https://tenor.com/view/dead-cat-cpr-funny-animals-cute-revive-gif-13712625"];
let loop = true;
let default_id = "754049600599621677";
let default_role ="823615437894844416";
let msg;
let msg_old;
let maicC;
let prfix = "Alain";
let args;
//funct
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function cWordCheck(tab, msg){
    let cWord = false;
    let i = 0;
    while(cWord===false && i < tab.length)
    {
        if(tab[i] == "COQUINE" && msg.deletable)
        {
            cWord=true;
        }
        i++;
    }
    return cWord;
}



//On start
client.on('ready', () => {
    prefix = prfix.toUpperCase();
    console.log('Le bot est connecté !')

    client.user.setActivity('Fortnite', {
        type: 'PLAYING'
    })

//On message
    client.on('message', (message) => {
        msg_content = message.content.toUpperCase();
        if(!cWordCheck(args, message))
        {
        if(msg_content.startsWith(prefix)&& msg_old!=message.id)
        {
            args = msg_content.split(" ");
            
           
                msg_old = message.id;
                if(message.channel.type !="dm")
                {
                     mainC = message.guild.channels.cache.get(default_id);
                }
                else
                {
                    if(!message.author.bot && msg!=undefined)
                    {
                        msg.channel.send("De "+message.author.username+"  : "+message.content);
                    }
                }

                if(args[2]==="?")
                {
                    message.channel.send("ici") //HERE
                }
                if(message.channel.type!="dm")
                {
                    if(!message.author.member.roles.get(default_role) && mode === 1)
                    {
                            message.reply("Tocard"); //HERE
                    } 
                    if(message.author.member.roles.get(default_role))
                    {
                        if(args[2]==="MODE" && (args[3]=="0" || args[3]=="1" || args[3]=="2"))
                        {
                            mode = parseInt(args[3]);
                            message.channel.send("Fait"); //HERE

                        }
                        if(args[2]==="MODE" && args[3]==="?")
                        {
                            message.channel.send("Mode = "+mode);

                        }
                        if(mode===2 && mainC!=undefined)
                        {
                            if(message.channel.id != mainC && args[2]==="STOP")
                            {
                                mainC.send(message.content);
                            }
                     
                        }
                        if(args[2]==="CHANGE" && args[3]==="DEFAULT_ID")
                        {
                            message.channel.send("Changé :cowboy:"); //HERE
                            default_id = message.channel.id;
                            mainC = message.guild.channels.cache.get(default_id);
                        }
                        if(args[2]==="DM" && mode !=2)
                        {
                        msg=message;
                        message.channel.send("Ok");
                        let mention = message.mentions.members.first();
                        if(mention != undefined)
                        {
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
                }
                 }
            
        } 
        else{
            message.delete();
        }
    })

    })
    client.login(process.env.TOKEN);

