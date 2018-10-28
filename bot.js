const Discord = require("discord.js")
const thtime = require("./thtime")
const chkboss = require("./chkboss")
const databoss = require("./databoss")
const botconfig = require("./botconfig")
const pic = require("./pic")
var bot = new Discord.Client()
var channelName = botconfig.channelName

bot.on("ready",function(){
    console.log('List GUilds : '+bot.guilds.array())
    console.log('Name Channel : '+channelName)
    console.log("Ready.....................")
})

setInterval(()=>status(), 10000);
setInterval(()=>alertz(), 60000);

bot.on("message", (msg) => {
    if (msg.content === "บอส"){
        h = thtime().h
        if (chkboss().t === "00:30" && h == 23){       //เช็คเวลาบอสตัวต่อไป ถ้าเป็นเวลา 00.30 และ 23 น ให้ใชวันพรุ่งนี้
                var dayz = thtime().dayz
        }else {
                var dayz = thtime().days            //ถ้าไม่่ใช่ 00.30 ให้ใช้วันของวันนี้
            }
        sendEmbed()
   }
    
   if (msg.content === "listguild"){
         var serverListguild = "```"+bot.guilds.array()+"```"
         msg.channel.send(serverListguild)
   }
   
   if (msg.content === "databoss"){
         var boss00 = "\n`00.30`   "+"`"+databoss.day1.b00[0]+"`  "+"`"+databoss.day2.b00[0]+"`  "+"`"+databoss.day3.b00[0]+"`  "+"`"+databoss.day4.b00[0]+"`  "+"`"+databoss.day5.b00[0]+"`  "+"`"+databoss.day6.b00[0]+"`  "+"`"+databoss.day0.b00[0]+"`  "
         var boss06 = "\n`06.00`   "+"`"+databoss.day1.b06[0]+"`  "+"`"+databoss.day2.b06[0]+"`  "+"`"+databoss.day3.b06[0]+"`  "+"`"+databoss.day4.b06[0]+"`  "+"`"+databoss.day5.b06[0]+"`  "+"`"+databoss.day6.b06[0]+"`  "+"`"+databoss.day0.b06[0]+"`  "
         var boss10 = "\n`10.00`   "+"`"+databoss.day1.b10[0]+"`  "+"`"+databoss.day2.b10[0]+"`  "+"`"+databoss.day3.b10[0]+"`  "+"`"+databoss.day4.b10[0]+"`  "+"`"+databoss.day5.b10[0]+"`  "+"`"+databoss.day6.b10[0]+"`  "+"`"+databoss.day0.b10[0]+"`  "
         var boss14 = "\n`14.00`   "+"`"+databoss.day1.b14[0]+"`  "+"`"+databoss.day2.b14[0]+"`  "+"`"+databoss.day3.b14[0]+"`  "+"`"+databoss.day4.b14[0]+"`  "+"`"+databoss.day5.b14[0]+"`  "+"`"+databoss.day6.b14[0]+"`  "+"`"+databoss.day0.b14[0]+"`  "
         var boss19 = "\n`19.00`   "+"`"+databoss.day1.b19[0]+"`  "+"`"+databoss.day2.b19[0]+"`  "+"`"+databoss.day3.b19[0]+"`  "+"`"+databoss.day4.b19[0]+"`  "+"`"+databoss.day5.b19[0]+"`  "+"`"+databoss.day6.b19[0]+"`  "+"`"+databoss.day0.b19[0]+"`  "
         var boss23 = "\n`23.00`   "+"`"+databoss.day1.b23[0]+"`  "+"`"+databoss.day2.b23[0]+"`  "+"`"+databoss.day3.b23[0]+"`  "+"`"+databoss.day4.b23[0]+"`  "+"`"+databoss.day5.b23[0]+"`  "+"`"+databoss.day6.b23[0]+"`  "+"`"+databoss.day0.b23[0]+"`  "
       msg.channel.send(boss00+boss06+boss10+boss14+boss19+boss23)
   
   }
    
   if (msg.content === "info"){
            msg.channel.send(botconfig.invitebot)
   }
    
   function sendEmbed(){
        const embed = new Discord.RichEmbed()
        .setTitle("__*บอสตัวต่อไป*__")  //หัวข้อ
        .setAuthor("Boss Timer ThBDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
        .setColor(0x112263)   //ใส่สี
        .setDescription("```cs\n วัน '"+dayz+"'  เวลา '"+chkboss().t+"' น. \n\n ####  "+chkboss().boss+"  ####```")   //รายละเอียด
       // .addField("วัน "+dayz+" เวลา "+chkboss().t,"```cs\n"+"บอสตัวต่อไป #"+chkboss().boss+"```")
        .setFooter("Boss Timer ThBDO "+botconfig.version+" พิมพ์ info", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twemoji_1f437.svg/2000px-Twemoji_1f437.svg.png") //รูป ข้อความล่างสุด
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
         
  
  if (h == 0 && m == 15) {
        sendAllServer()
    }

    
 if (day == 0 || day == 1 || day == 2 || day == 4 || day == 6) {
    if (h == 5 && m == 45) {
        sendAllServer()
    }
  }
    
  if (day !== 1) {
    if (h == 9 && m == 45) {
        sendAllServer()
     }
  }
    
  if (h == 13 && m == 45) {
        sendAllServer()
  }
    
  if (h == 18 && m == 45) {
        sendAllServer()
  }
   
 if (day !== 6) {
     if (h == 22 && m == 45) {
           sendAllServer()
     }
   }
    
}

function sendAllServer(){    //ส่งทุกห้องที่มีบอทอยู่
           var serverList = bot.guilds.array()
           serverList.forEach(guild => {
                if(guild.channels.find("name", channelName)){
                var channel =  guild.channels.find("name", channelName)
                //channel.send('@everyone ทดสอบส่งข้อความไปทุกห้องที่แอดบอทอยู่ '+chkboss().boss+' อีก 15 นาที')
                channel.send('@everyone '+chkboss().boss+' อีก 15 นาที')
                console.log('่ส่งข้อความไปยัง :'+serverList)
            }
        })
}

bot.login(process.env.BOT_TOKEN)
//bot.login(botconfig.tokenbotdiscord)
