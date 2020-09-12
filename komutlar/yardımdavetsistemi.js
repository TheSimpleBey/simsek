const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('644234599601274912') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Davet Sistemi Komut Listesi`)
        .setDescription(` • | **${ayarlar.prefix}davet-kanal** : Davet Mesajlarının Gönderileceği Kanalı Belirtirsiniz.\n • | **${ayarlar.prefix}davet-kanal-sıfırla** : Ayarlanmış Davet Kanalını Sıfırlarsınız.\n • | **${ayarlar.prefix}davet-ekle** : Etiketlediğiniz Kullanıcıya Belirttiğiniz Kadar Davet Sayısı Eklersiniz.\n • | **${ayarlar.prefix}davet-sil** : Etiketlediğiniz Kullanıcıdan Belirttiğiniz Kadar Davet Sayısı Silersiniz.\n • | **${ayarlar.prefix}davet-sıfırla** : Etiketlediğiniz Kullanıcının Davet Sayısını Sıfırlarsınız.\n • | **${ayarlar.prefix}davet-stokla** : Herhangi Bir İşlevi Yoktur,Test Komutudur :)\n • | **${ayarlar.prefix}davetlerim** : Kendi Davetlerinizi Gösterir.\n • | **${ayarlar.prefix}davetsay** : Etiketlediğiniz Kullanıcının Davet Sayısına Bakarsınız.\n • | **${ayarlar.prefix}davet-oluştur** : Sunucuya Ait Bir Davet Linki Oluşturursunuz.\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ **\`Rütbe Sistemi\`** ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n • | **${ayarlar.prefix}rütbe-ekle** : Sunucunuza Yapılan Davet Sayısına Göre Rütbe(Rol) Seviyesi Oluşturursunuz.\n • | **${ayarlar.prefix}rütbe-sil** : Eklediğiniz Rütbe Seviyesini Silersiniz.\n • | **${ayarlar.prefix}rütbe-liste** : Sunucuya Eklenilen Rütbe Seviyelerini Listelersiniz.`)  
      .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=644234599601274912&permissions=8&redirect_uri=https%3A%2F%2Fcanim-bot.glitch.me%2Fcallback&scope=bot) **|** [Destek Sunucusu](https://discord.gg/yxRRTKa) **|** [Youtube Kanalımız](https://www.youtube.com/channel/UCfKKzCn1YuHu_hWKciYb2yw/featured?view_as=subscriber)`)
      .setFooter(`SyreX | Bot Sürümü : v0.1 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetsistemi', 'davet-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'davetsistemi',
  description: '',
  usage: ''
};