const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('644234599601274912') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Sayaç Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}sayaç** : Belirlediğiniz Hedefe Ulaşma Yolunda Üyelerinizi Sayar.\n • | **${ayarlar.prefix}sayaç-sıfırla** : Ayarlanmış Sayaç Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}sayaç-mesaj-hg** : Sunucuya Bir Üye Katıldığında Gönderilecek Sayaç Mesajını Düzenlersiniz.\n • | **${ayarlar.prefix}sayaç-mesaj-bb** : Sunucudan Bir Üye Ayrıldığında Gönderilecek Sayaç Mesajını Düzenlersiniz.\n • | **${ayarlar.prefix}sayaç-mesaj-sıfırla** : Belirttiğiniz Sayaç Mesajını Sıfırlarsınız.`)  
  .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=644234599601274912&permissions=8&redirect_uri=https%3A%2F%2Fcanim-bot.glitch.me%2Fcallback&scope=bot) **|** [Destek Sunucusu](https://discord.gg/UHfVJaN) **|** [Youtube Kanalımız](https://www.youtube.com/channel/UCfKKzCn1YuHu_hWKciYb2yw/featured?view_as=subscriber)`)
   return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayacsistemi','sayac-sistemi','sayaçsistemi','sayaç-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'sayacsistemi',
  description: '',
  usage: ''
};