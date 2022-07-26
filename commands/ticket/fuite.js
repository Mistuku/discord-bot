const Discord = require("discord.js")

module.exports = {
  
    name: 'fuite',
    description: 'Permet de ne plus prendre en charge une commande',
    run: async (bot, message, args) => {
        message.delete()
        if(!message.channel.name.includes('ticket')) return message.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!message.member.roles.cache.find(r=> r.id === "992082077812019262")) return message.channel.send(`Vous n'etes pas un vendeur !`)

        const topic = message.channel.topic

        if(topic !== message.member.id) return message.reply(`Vous n'êtes pas le vendeur de cette commande !`)

        const MemberUserName = message.channel.name.slice(8)

        const Member = message.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)
        
        if(Member === message.member) return message.reply(`Vous ne pouvez pas annuler de prendre en charge votre commande car vous ne pouvez pas prendre votre propre commande !`)

        if(message.channel.name.startsWith("⭕")) return message.reply(`Personne n'a encore prit la commande`)

        message.channel.setTopic('Personne n\'a prit la commande')
        message.channel.setName(`⭕ticket-${MemberUserName}`)

        const FuiteEmbed = new Discord.MessageEmbed()
        .setTitle(`🕵️‍♂️ Votre vendeur a prit la fuite ! 🕵️‍♂️`)
        .setColor('RANDOM')
        .setDescription(`${message.member} ne peut plus assurer votre commande et il en est sincèrement désolé...\n\nLes vendeurs viennent à l'instant d'être ping afin qu'un autre prenne en charge votre commande\n\nNous nous excusons pour la gêne occasioner`)
        .setImage("https://cdn.discordapp.com/attachments/999319806429900810/999329898877423656/STAFF_1.png")
        
   

        await message.channel.send({content: `${Member}, <@&992082077812019262>`, embeds: [FuiteEmbed]})  
    }
    
  }