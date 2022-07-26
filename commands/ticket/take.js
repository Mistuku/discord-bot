const Discord = require("discord.js")

module.exports = {
  
    name: 'take',
    description: 'Permet de prendre en charge une commande',
    run: async (bot, message, args) => {
        message.delete()
        
        const Vendeur = message.member;

        const MemberUserName = message.channel.name.slice(8)

        const Member = message.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)

        if(!message.channel.name.includes('ticket')) return message.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!message.member.roles.cache.find(r=> r.id === "992082077812019262")) return message.channel.send(`Vous n'etes pas un vendeur !`)

        if(Member === message.member) return message.reply(`Vous ne pouvez pas prendre votre propre commande !`)

        if(message.channel.name.startsWith("🟡")) return message.channel.send(`Un vendeur a déjà prit la commande`)

        const TakeEmbed = new Discord.MessageEmbed()
        .setTitle(`💸 ${Vendeur.user.username} a prit votre commande ! 💸`)
        .setColor('DARK_GREEN')
        .setDescription(`**Votre commande a été prise !**\n\n${Vendeur} est entrain de préparer votre commande, elle sera prête dans minimum 10min, dès qu'il aura fini de la farm il fera **w/ready** ✅\n\nVous serez alors ping, et vous pourrez vous organisez avec votre vendeur pour récupérer votre commande !\n\nPour toutes questions, veuillez contacter un membre du haut-staff par mp, tout troll sera stanctionner`)
   
       

        await message.channel.send({content: `${Member}`, embeds: [TakeEmbed]})

        message.channel.setTopic(Vendeur.user.id)
        message.channel.setName(`🟡ticket-${MemberUserName}`)


            
    }
    
  }