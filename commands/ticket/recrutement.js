const Discord = require('discord.js')

// Exportation et ajout des paramètres
module.exports = {
  
    name: 'recrutement',
    description: 'affiche le panel pour ouvrir un ticket recrutement',
    run: async (bot, message, args) => {
    
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas les permissions requises pour utiliser cette commande !');

        const RecrutementPanelEmbed = new Discord.MessageEmbed()
        .setTitle(`📝 RECRUTEMENTS 📝`)
        .setColor('#39e434')
        .setDescription('Conditions pour être recruté dans le Shop LS :\n> \n> __Vendeur__\n> \n> **Au moins 15 ans**\n> **Être actif dans le jeu**\n> **N\'avoir eu aucune sanction en jeu (inutile de nous mentir, certains membres**\n> **de la LS sont Modérateurs de Paladium et peuvent vérifier si vous mentez ou**\n> **non)**\n> **Doit avoir une bonne orthographe et être courtois pour nos clients**\n> \n> __Modérateur__\n> \n> **Au moins 17 ans**\n> **Être actif sur Discord**\n> **Être actif sur Discord**\n> \n> \n> ```RECRUTEMENT VENDEUR [ON]```\n> ```RECRUTEMENT MODERATEUR [ON]```')
        .setFooter({ text: `Bot dev by Mistuku#0001`})
        .setTimestamp()

        const OpenTicket = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('openticketr')
                .setLabel('Postuler')
                .setStyle('SUCCESS')
                .setEmoji('📨')
        );
        

        await message.channel.send({embeds: [RecrutementPanelEmbed], components: [OpenTicket]})
    }
}