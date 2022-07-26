const Discord = require('discord.js')


module.exports = {
  
  name: 'guildMemberAdd',
  once: false,
  async execute(bot, member) {
    
    const memberJoined = member;

    const embedWelcome = new Discord.MessageEmbed()
    .setTitle(`<:WitchsShop:992483803933184081> Tout le monde souhaite la bienvenue à ${memberJoined.user.username} <:WitchsShop:992483803933184081>`)
    .setColor('#b011f1')
    .setDescription(`Voici les choses majeures que tu dois savoir sur le market !**\n\n> Pour commander <#996061524407885974>\n> Pour les giveaways <#995931124738035762>\n> Pour __voir__ les annonces <#995925609068908564>\n> Pour voir les changements de prix <#997181101015568414>\n> Pour devenir vendeur ou bien modérateur <#995929979504295936>\n\n**C'est à peu près tout ce qu'il y a à savoir !**\n*Cordialement tout le staff*`)
    .setImage('https://cdn.discordapp.com/attachments/997789419107012690/997793504023547924/unknown.png')
    .setTimestamp()
    .setFooter({text: `Encore bienvenue !`})
    
    
    await member.guild.channels.cache.get('1001498295295823932').send({content: `<:WitchsShop:992483803933184081> ${memberJoined.member} <:WitchsShop:992483803933184081>`, embeds: [embedWelcome]})
    }

    
    
  }