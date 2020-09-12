
const Discord = require('discord.js');


exports.run = function(client, message, embed, params) {
  const chypercode = new Discord.RichEmbed()

  .setColor('RED')
  .setImage('https://api.alexflipnote.dev/supreme?text='+ client.ping +'%20Ping')

    message.channel.send(chypercode);

};   
  
//CHYPER CODE <3
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['ms'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Bota Ait Ping Değerini Gösterir.',
  usage: 'ping'
};