//Require
const { Client, TeamMember } = require('discord.js')

const client = new Client({
    partials: ['GUILD_MEMBER', 'CHANNEL', 'USER', 'REACTION']
})

//vars
let mode = 0;
let mainC;
let default_id = "754049600599621677";
let default_role ="823615437894844416";
let voc_done = ["Fait :cowboy:",""];
let usr_md;
let msg;
let msg_old;
let prfix = "Alain";
let args;
//funct
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function cWordCheck(tab, msg){
    let cWord = false;
    let i = 0;
    while(cWord===false && i < tab.length )
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
        args = msg_content.split(" ");

        if(!cWordCheck(args, message))
        {
        if(msg_content.startsWith(prefix)&& msg_old!=message.id && !message.author.bot && message.author.id!=usr_md)
        {
            
           
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

                if(args[1]==="?")
                {
                    message.channel.send("ici") //HERE
                }
                if(message.channel.type!="dm")
                {
                    if(!message.member.roles.cache.get(default_role) && mode === 1)
                    {
                            message.reply("Tocard"); //HERE
                    } 
                    if(message.member.roles.cache.get(default_role))
                    {
                        if(args[1]==="MODE" && (args[2]=="0" || args[2]=="1" || args[2]=="2"))
                        {
                            mode = parseInt(args[2]);
                            if(mode===2)
                            {
                                usr_md = message.author.id;
                            }
                            message.channel.send("Fait"); //HERE

                        }
                        if(args[1]==="MODE" && args[2]==="?")
                        {
                            message.channel.send("Mode = "+mode);

                        }
                        if(args[1]==="CHANGE" && args[2]==="DEFAULT_ID")
                        {
                            message.channel.send("Changé :cowboy:"); //HERE
                            default_id = message.channel.id;
                            mainC = message.guild.channels.cache.get(default_id);
                        }
                        if(args[1]==="DM" && mode !=2)
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
        if(mode===2 && mainC!=undefined && usr_md === message.author.id && msg_content!="ALAIN MODE 2")
        {
            if(message.channel.id != mainC && args[2]!="STOP")
            {
                mainC.send(message.content);
            }
            else
            {
                mode=0;
                usr_md=undefined;
            }
     
        }
    })

    })
    client.login(process.env.TOKEN);

