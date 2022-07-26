const Discord = require("discord.js")

module.exports = {
  
    name: 'ready',
    description: 'Permet de prévenir le client que sa commande est prête',
    run: async (bot, message, args) => {
      
        const MemberUserName = message.channel.name.slice(9)

        

        if(!message.channel.name.includes('ticket')) return message.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!message.member.roles.cache.find(r=> r.id === "992082077812019262")) return message.channel.send(`Vous n'etes pas un vendeur !`)
        
        const topic = message.channel.topic
        
        

        const Member = message.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)
        
        if(Member.id === message.member.id) return message.reply(`Vous ne pouvez pas prendre votre propre commande !`)

        if(topic !== message.member.id) return message.reply(`Vous n'êtes pas le vendeur de cette commande !`)

        if(message.channel.name.startsWith("🟢")) return message.channel.send(`La commande est déjà end !`)
        if(message.channel.name.startsWith("🟣")) return message.channel.send(`La commande est déjà prête !`)
        
        const ReadyEmbed = new Discord.MessageEmbed()
        .setTitle(`💸 ${message.member.user.username} a fini de farm votre commande ! 💸`)
        .setColor('DARK_GREEN')
        .setDescription(`**Votre commande est prête !**\n\n${message.member} à fini de la farm, je vous laisse trouvez un arrangement pour que vous puissez la récupérez\n\nVoilà comment se déroulera l'échange, tout d'abord, vous payerez votre vendeur, vous pourrez ensuite vous tp à lui pour récupérer votre commande.\n\nNos vendeurs recs constamment inutiles d'essayer de tp kill.\n\nPour toutes questions, veuillez contacter un membre du haut-staff par mp, tout troll sera stanctionner`)
        

        await message.channel.send({content: `${Member}`, embeds: [ReadyEmbed]})

        message.channel.setName(`🟣ticket-${MemberUserName}`)  
         
    }
    
  }