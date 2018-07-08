const Discord = require("discord.js")
const thtime = require("./thtime")
const chkboss = require("./chkboss")
const botconfig = require("./botconfig")
var bot = new Discord.Client()
var channelName = botconfig.channelName

module.exports = function() {
    day = thtime().day
    h = thtime().h
    m = thtime().m
    
  if (day == 2 || day == 3 || day == 6) {
    if (h == 23 && m == 45) {
      var channel = bot.channels.find("name", channelName)
      if (channel) {
        channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
      } else {
        var channel = bot.channels.find("name", 'general')
        channel.sendMessage('```-Create Channel-```')
      }
    }
  }
  if (day == 0 || day == 1 || day == 4 || day == 5) {
    if (h == 9 && m == 45) {
      var channel = bot.channels.find("name", channelName)
      if (channel) {
        channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
      } else {
        var channel = bot.channels.find("name", 'general')
        channel.sendMessage('```-Create Channel-```')
      }
    }
  }
  if (h == 13 && m == 45) {
    var channel = bot.channels.find("name", channelName)
    if (channel) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
    } else {
      var channel = bot.channels.find("name", 'general')
      channel.sendMessage('```-Create Channel-```')
    }
  }
  if (h == 17 && m == 45) {
    var channel = bot.channels.find("name", channelName)
    if (channel) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
    } else {
      var channel = bot.channels.find("name", 'general')
      channel.sendMessage('```-Create Channel-```')
    }
  }
    
    
   if (h == 23 && m == 19) {
    var channel = bot.channels.find("name", channelName)
    if (channel) {
      channel.sendMessage('@everyone '+chkboss().boss+' อีก 15 นาที')
    } else {
      var channel = bot.channels.find("name", 'general')
      channel.sendMessage('```-Create Channel-```')
    }
  }
    
    
}
