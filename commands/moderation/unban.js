const Discord = require('discord.js');

module.exports = {
  
    name: 'unban',
    description: 'Permet de débannir une personne',
    run: async (bot, message, args) => {
      
        if(!message.member.permissions.has('UNBAN_MEMBERS')) return message.channel.send('Vous n\avez pas les permissions requises pour utiliser cette commande !');

        let user = message.user ? args._hoistedOptions[0].value : args[0]
        if(!user) return message.reply("Aucune personne trouvée !")
        if((await message.guild.bans.fetch(message.user ? args._hoistedOptions[0].value : args[0])).size === 0) return message.reply("Aucune personne trouvée dans les bannissements !")

        await message.reply(`${(await bot.users.fetch(message.user ? args._hoistedOptions[0].value : args[0])).tag} a été débanni par ${message.user === undefined ? message.author.tag : message.user.tag}`)
        
        await message.guild.members.unban(message.user ? args._hoistedOptions[0].value : args[0])
    },
  }