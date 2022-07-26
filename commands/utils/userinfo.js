// Exportation et ajout des paramètres
const Discord = require('discord.js')
module.exports = {
  
    name: 'userinfo',
    description: 'Info sur un membre',
    run: async (bot, message, args) => {

        const MemberInfo = message.guild.members.cache.get(args[0]) || message.member

        const UserInfoEmbed = new Discord.MessageEmbed()
        .setTitle('User Info')
        .setColor('AQUA')
        .setDescription(`Nom de l'utilisateur : ${MemberInfo.user.username}\nCompte créer il y a : <t:${MemberInfo.user.createdTimestamp}:D>`)
        .setTimestamp()
        .setThumbnail(bot.user.displayAvatarURL())

        await message.channel.send({embeds: [UserInfoEmbed]})



      
    },
    
    runSlash: async (bot, interaction) => {
      
 
      
    }
    
  }