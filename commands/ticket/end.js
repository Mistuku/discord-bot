const Discord = require("discord.js")

module.exports = {
  
    name: 'end',
    description: 'Permet de prévenir que la commande est terminé',
    run: async (bot, message, args) => {
      
        if(!message.channel.name.includes('ticket')) return message.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!message.member.roles.cache.find(r=> r.id === "992082077812019262")) return message.channel.send(`Vous n'etes pas un vendeur !`)
        
        const topic = message.channel.topic
        
        const MemberUserName = message.channel.name.slice(9)

        const Member = message.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)
        
        if(Member === message.member) return message.reply(`Vous ne pouvez pas finir votre propre commande !`)

        if(topic !== message.member.id) return message.reply(`Vous n'êtes pas le vendeur de cette commande !`)

        if(message.channel.name.startsWith("🟢")) return message.channel.send(`La commande est déjà fini`)
        if(message.channel.name.startsWith("🟡")) return message.channel.send(`La commande n'est pas encore prête !`)

        const EndEmbed = new Discord.MessageEmbed()
        .setTitle(`💸 ${message.member.user.username} le trade à été fait ! 💸`)
        .setColor('DARK_GREEN')
        .setDescription(`**Vous venez de faire le trade avec votre vendeur !**\n\nVous pouvez laisser un avis dans <#999573853216985099> ce qui aidera énormément ${message.member} !\n\nNous espérons tous avoir géré votre commande aussi bien que nous le pouvons pour vous.\n\nOn espère vous revoir bientôt :wave:`)

        await message.channel.send({content: `${Member}`, embeds: [EndEmbed]})

        message.channel.setName(`🟢ticket-${Member.user.username}`)

        
         
    }
    
  }