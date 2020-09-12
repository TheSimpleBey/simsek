const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  let premium2 = await db.fetch(`pre_${message.guild.id}`)
  let pre
  if(!premium2){
    pre = "Hayır!"
  }else{
    pre = "Evet!"
  }
  const duration = moment
    .duration(bot.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`Versiyon`, `0.1`, true)
    .addField(`Aktiflik Süresi`, duration, true)
    .addField(`Sunucular`, bot.guilds.size.toLocaleString(), true)
    .addField(`Kullanıcılar`, bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(
      `Ram Kullanımı`,
      `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
      true
    )
    .addField(`Bu Sunucu Premium Mu?`, pre, false)
    .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=644234599601274912&permissions=8&redirect_uri=https%3A%2F%2Fcanim-bot.glitch.me%2Fcallback&scope=bot) **|** [Destek Sunucusu](https://discord.gg/yxRRTKa) **|** [Youtube Kanalımız](https://www.youtube.com/channel/UCfKKzCn1YuHu_hWKciYb2yw/featured?view_as=subscriber)`)
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i', 'istatistik'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
