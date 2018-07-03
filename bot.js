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

setInterval(()=>status(), 30000);

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

        if(channelName) {
            var channel = bot.channels.find("name", botconfig.channelName)
            channel.sendMessage({embed})
        }
        else msg.channel.sendMessage({embed})
       
    }
})

function status(){     
    bot.user.setGame('NEXT '+chkboss().t+' '+chkboss().boss)
}
   
bot.login(process.env.BOT_TOKEN)
