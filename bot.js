const Discord = require("discord.js")
const thtime = require("./thtime")
const chkboss = require("./chkboss")
const botconfig = require("./botconfig")
var bot = new Discord.Client()
var channelName = botconfig.channelName
bot.on("ready",function(){
    console.log("Ready")
    //console.log(chkboss())
    //console.log(channelName)
})

setInterval(()=>status(), 10000);
setInterval(()=>alertz(), 60000);

bot.on("message", (msg) => {
    if (msg.content === "บอส"){
        const embed = new Discord.RichEmbed()
        .setTitle("บอสตัวต่อไป")  //หัวข้อ
        .setAuthor("Boss Timer ThBDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
        .setColor(0x112263)   //ใส่สี
        .setDescription("วัน  "+thtime().days+"   เวลา   "+"__"+chkboss().t+"__"+"              "+"__**"+chkboss().boss+"**__")   //รายละเอียด
        .setFooter("Boss Timer ThBDO "+botconfig.version+" by ฟูโอ้", "https://cdn.pixabay.com/photo/2017/08/27/22/02/pig-2687704_960_720.png") //รูป ข้อความล่างสุด
        .setImage("https://www.picz.in.th/images/2018/06/22/489tfS.png")     //รูปใหญ่
        .setThumbnail(chkboss().imgboss)   //รูปเล็กขวาบน
        .setTimestamp()  //เวลาด้านล่างสุด
         msg.channel.sendMessage({embed})
    }
    
    
    if (msg.content === "```-Create Channel-```") {
         msg.guild.createChannel(channelName, 'text')   //สร้างห้องง
         sleep(3000)
         var channel = bot.channels.find("name", channelName)
         if (channel) {
             msg.channel.send('```' + 'สร้างห้อง ' + channelName + ' เรียบร้อย' + '```')
         }else{
             msg.channel.send('```' + 'สร้างห้อง ' + channelName + ' ไม่ได้ กรุณาให้ยศAdminกับบอท' + '```')
         }
    }

})

function status(){     
    bot.user.setGame('NEXT '+chkboss().t+' '+chkboss().boss)
    chkchannel()
}

function chkchannel(){
      var channel = bot.channels.find("name", channelName)
      if (!channel) {
        var channel = bot.channels.find("name", 'general')
        bot.channels.get(channel.id).send('```-Create Channel-```')
        //channel.sendMessage('```-Create Channel-```')
      } 
}

function alertz() {
    day = thtime().day
    h = thtime().h
    m = thtime().m
  
    var channel = bot.channels.find("name", channelName)
  if (!channel) {
        var channel = bot.channels.find("name", 'general')
        channel.sendMessage('```-Create Channel-```')
  } 
        
  if (day == 2 || day == 3 || day == 6) {
    if (h == 23 && m == 45) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
    }
  }
    
  if (day == 0 || day == 1 || day == 4 || day == 5) {
    if (h == 9 && m == 45) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
     }
  }
    
  if (h == 13 && m == 45) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
  }
    
  if (h == 17 && m == 45) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
  }
 
 /* if (h == 0 && m == 56) {  //เทสส่ง msg
      channel.sendMessage('@everyone test message to channel : '+channelName+' / Next boss : '+chkboss().boss)
  } //จบ เทส*/
    
}

function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
}

bot.login(process.env.BOT_TOKEN)
