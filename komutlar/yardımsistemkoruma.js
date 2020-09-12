const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('644234599601274912') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Koruma Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}rol-koruma** : Rol Koruma Sistemini Açarsınız.\n • | **${ayarlar.prefix}rol-koruma-sıfırla** : Rol Koruma Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}kanal-koruma** : Kanal Koruma Sistemini Açarsınız.\n • | **${ayarlar.prefix}kanal-koruma-sıfırla** : Kanal Koruma Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}reklam-engel** : Reklam Koruma Sistemini Açıp Kapatırsınız.\n • | **${ayarlar.prefix}ever-engel** : Everyone Kullanımlarını Tamamı İle Engeller.`)  
  .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=644234599601274912&permissions=8&redirect_uri=https%3A%2F%2Fcanim-bot.glitch.me%2Fcallback&scope=bot) **|** [Destek Sunucusu](https://discord.gg/UHfVJaN) **|** [Youtube Kanalımız](https://www.youtube.com/channel/UCfKKzCn1YuHu_hWKciYb2yw/featured?view_as=subscriber)`)
   return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma','korumasistemi','koruma-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma',
  description: '',
  usage: ''
};