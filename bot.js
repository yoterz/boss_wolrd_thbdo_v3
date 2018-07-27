const Discord = require("discord.js")
const thtime = require("./thtime")
const chkboss = require("./chkboss")
const botconfig = require("./botconfig")
const pic = require("./pic")
var bot = new Discord.Client()
var channelName = botconfig.channelName
var channelid = botconfig.channelid

bot.on("ready",function(){
    for(i=0; i < channelid.length; i++){
            console.log(i, channelid[i])
        }
    console.log("Ready")
    
})

setInterval(()=>status(), 10000);
setInterval(()=>alertz(), 60000);

bot.on("message", (msg) => {
    if (msg.content === "บอส"){
       const embed = new Discord.RichEmbed()
        .setTitle("บอสตัวต่อไป")  //หัวข้อ
        .setAuthor("Boss Timer ThBDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
        .setColor(0x112263)   //ใส่สี
        .setDescription("```md\n"+"วัน "+thtime().days+" เวลา <"+chkboss().t+"> * "+chkboss().boss+" *```")   //รายละเอียด
      // .addField("บอสตัวต่อไป","```md\n"+"วัน "+thtime().days+" เวลา <"+chkboss().t+"> * "+chkboss().boss+" *```")
        .setFooter("Boss Timer ThBDO "+botconfig.version+" by ฟูโอ้", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twemoji_1f437.svg/2000px-Twemoji_1f437.svg.png") //รูป ข้อความล่างสุด
        .setImage(pic.tableboss)     //รูปใหญ่
        .setThumbnail(chkboss().imgboss)   //รูปเล็กขวาบนผ
        .setTimestamp()  //เวลาด้านล่างสุดผ
         msg.channel.send({embed})
    }
 
})

function status(){     
    bot.user.setGame('NEXT '+chkboss().t+' '+chkboss().boss)
}

function alertz() {
    day = thtime().day
    h = thtime().h
    m = thtime().m
  
  //var channel = bot.channels.find("name", channelName)
        
  if (day == 0 || day == 3 || day == 4) {
    if (h == 0 && m == 0) {
        sendallchannel()
        //channel.send('@everyone '+chkboss().boss+' อีก 15 นาที')
    }
  }
    
  if (day == 0 || day == 1 || day == 3 || day == 4 || day == 5) {
    if (h == 9 && m == 45) {
        sendallchannel()
      //channel.send('@everyone '+chkboss().boss+' อีก 15 นาที')
     }
  }
    
  if (h == 13 && m == 45) {
      sendallchannel()
      //channel.send('@everyone '+chkboss().boss+' อีก 15 นาที')
  }
    
  if (h == 17 && m == 45) {
      sendallchannel()
      //channel.send('@everyone '+chkboss().boss+' อีก 15 นาที')
  }
    //test msg
    if (h == 16 && m == 21) {
      sendallchannel()
     }
   
}

function sendallchannel(){
           for(i=0; i < channelid.length; i++){
                let msgchannelid = channelid[i]
                bot.channels.get(msgchannelid).send('@everyone test message หลายห้องพร้อมกัน '+chkboss().boss+' อีก 15 นาที')
                //bot.channels.get(msgchannelid).send('@everyone '+chkboss().boss+' อีก 15 นาที')
                console.log('send Message to ChannelID : '+ channelid[i])
            }
}

bot.login(process.env.BOT_TOKEN)
//bot.login(botconfig.tokenbotdiscord)
