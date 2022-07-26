const Discord = require('discord.js');
const ms = require('ms')

module.exports = {
  
    name: 'tempban',
    description: 'Permet de temp bannir une personne',
    run: async (bot, message, args) => {


            if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission pour effectuer cette commande")
            const target = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
            if(!target) return message.channel.send("Veuillez indiquer un membre à tempban")
            const time = args[1]
            if(!time) return message.channel.send('Veuillez spécifier le temps du tempban')
            if(ms(time) === undefined || null) return message.channel.send('Merci de spécifier un temps correct')

           await target.ban({reason: "Pourquoi voulez vous tempban ce membre ?"})

           const embedTempban = new Discord.MessageEmbed()
           .setTitle('Vous avez tempban quelqu\'un')
           .setDescription(`Vous avez tempban ${target.user.tag}`)
           .setColor("BLUE")
           .setTimestamp()
           .setThumbnail()
    
           await message.channel.send(embedTempban)

            setTimeout( async () => {

                await message.guild.members.unban(target)

            }, ms(time))
    }
}