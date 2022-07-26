const Discord = require('discord.js')

// Exportation et ajout des paramètres
module.exports = {
  
    name: 'ticket-panel',
    description: 'affiche le panel pour ouvrir un ticket commande',
    run: async (bot, message, args) => {
    
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas les permissions requises pour utiliser cette commande !');

        const CommandPanelEmbed = new Discord.MessageEmbed()
        .setTitle(`:package: Commande :package:`)
        .setColor('#39e434')
        .setDescription('`DISPONIBILITES DE NOTRE MARKET`\n\n🟢 = Disponible en très grande quantité\n🟠 = Disponible en petite quantité\n🔴 = Indisponible\n⚫ = Non vendable\n\nUne fois votre ticket commande ouvert merci de respecter le panel qui y sera indiquer')
        .setTimestamp()

        const OpenTicket = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('openticket')
                .setLabel('Passer commande !')
                .setStyle('SUCCESS')
                .setEmoji('📦')
        );
        

        await message.channel.send({embeds: [CommandPanelEmbed], components: [OpenTicket]})
    }
}