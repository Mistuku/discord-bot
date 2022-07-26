// Exporation de l'événement ready qui détecte quand le bot est en ligne
const Discord = require('discord.js')

module.exports = {
  
    name: 'ready',
    once: true,
    execute(bot ) {
      
      // On va mettre dans le terminal que le bot est en ligne
      // Vous pouvez changer le texte à votre guise
      // Sachant que ${bot.user.tag} est le tag du bot ex: TwiZio#5584
      // Et que ${bot.user.id} est l'id du bot
      // Et enfin que ${bot.user.username} est le pseudo du bot ex: TwiZio
      console.log(`${bot.user.username} est en ligne !`)
      
      // Enregistrement des slashCommands
      const guild = bot.guilds.cache.get('992081319871905985')
      guild.commands.set(bot.commands.map(cmd => cmd))

      function randomStatus() {
          let status = ['paladium', 'farmer les commandes', 'traiter les tickets', '90 membres go 100', 'dev by Mistuku#0001']
          let rStatus = Math.floor(Math.random() * status.length);

          bot.user.setActivity(status[rStatus], {type: "PLAYING", url: "https://www.twitch.tv/coldenor01"})
      }; setInterval(randomStatus, 3000)

     
       
    }
    
  }
  