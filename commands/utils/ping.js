// Exportation et ajout des paramètres
module.exports = {
  
    name: 'ping',
    description: 'Renvoie pong !',
    run: async (bot, message, args) => {
      
      // Le bot répond Pong !
      await message.channel.send('Pong !')
      
    },
    
    runSlash: async (bot, interaction) => {
      
      // Le bot répond Pong !
      await interaction.reply('Pong !')
      
    }
    
  }